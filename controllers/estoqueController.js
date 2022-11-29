const { ObjectId } = require('bson');
const Estoque = require('../model/estoqueModel');


async function criarEstoque(req, res) {
    const estoque = new Estoque(req.body);
    const erros = []
     await estoque.save()
     .then(doc => {
        console.log(doc)
        return res.status(201).end();
    })
     .catch(error => {
       const msgErro = {};
        Object.values(error.errors).forEach(({properties}) =>{
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
    });
}

async function listarEstoque(req, res) {
    await Estoque.find({})
    .then(estoque => {return res.json(estoque);})
    .catch(error => {return res.status(500).json({error}); });
}

async function listarEstoquesPorId(req, res) {
    await Estoque.findOne({_id: ObjectId(req.params.id)})
    .then(estoque => {
        if(estoque) return res.json(estoque);
        else return res.status(404).json('estoque nao localizado')
    })
    .catch(error => {return res.status(500).json({error}); });
}

async function atualizarEstoques(req, res) {
    await Estoque.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body,
    {runValidators: true})
    .then(estoque => {
        if(estoque) return res.status(204).end();
        else return res.status(404).json('estoque não localizado')
    })
    .catch(error => {return res.status(500).json({error}); });
}

async function removerEstoques(req, res) {
    await Estoque.findOneAndDelete({_id: ObjectId(req.params.id)})
    .then(estoque => {
        if(estoque) return res.status(204).end();
        else return res.status(404).json('estoque não localizado')
    })
    .catch(error => {return res.status(500).json({error}); });
}

module.exports = { listarEstoque, listarEstoquesPorId, criarEstoque, atualizarEstoques, removerEstoques };