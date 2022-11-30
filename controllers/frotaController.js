const { ObjectId } = require('bson');
const Frota = require('../model/frotaModel');


async function criarFrota(req, res) {
    const frota = new Frota(req.body);
    const erros = []
     await frota.save()
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

async function listarFrota(req, res) {
    await Frota.find({})
    .then(frota => {return res.json(frota);})
    .catch(error => {return res.status(500).json({error}); });
}

async function listarFrotaPorId(req, res) {
    await Frota.findOne({_id: ObjectId(req.params.id)})
    .then(frota => {
        if(frota) return res.json(frota);
        else return res.status(404).json('Frota nao localizado')
    })
    .catch(error => {return res.status(500).json({error}); });
}

async function atualizarFrota(req, res) {
    await Frota.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body,
    {runValidators: true})
    .then(frota => {
        if(frota) return res.status(204).end();
        else return res.status(404).json('Frota não localizado')
    })
    .catch(error => {return res.status(500).json({error}); });
}

async function removerFrota(req, res) {
    await Frota.findOneAndDelete({_id: ObjectId(req.params.id)})
    .then(frota => {
        if(frota) return res.status(204).end();
        else return res.status(404).json('Frota não localizada')
    })
    .catch(error => {return res.status(500).json({error}); });
}

module.exports = { listarFrota, listarFrotaPorId, criarFrota, atualizarFrota, removerFrota };