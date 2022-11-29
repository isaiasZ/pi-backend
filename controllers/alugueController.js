    const { ObjectId } = require('bson');
    const Aluguel = require('../model/alugueModel');
    
    async function criarAlugue(req, res) {
        const alugue = new Aluguel(req.body);
        const erros = []
         await alugue.save()
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
    
    async function listarAlugue(req, res) {
        await Aluguel.find({})
        .then(alugue => {return res.json(alugue);})
        .catch(error => {return res.status(500).json({error}); });
    }
    
    async function listarAluguePorId(req, res) {
        await Aluguel.findOne({_id: ObjectId(req.params.id)})
        .then(alugue => {
            if(alugue) return res.json(alugue);
            else return res.status(404).json('Aluguel nao localizado')
        })
        .catch(error => {return res.status(500).json({error}); });
    }
    
    async function atualizarAlugue(req, res) {
        await Aluguel.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body,
        {runValidators: true})
        .then(alugue => {
            if(alugue) return res.status(204).end();
            else return res.status(404).json('Aluguel atualizado com sucesso!')
        })
        .catch(error => {return res.status(500).json({error}); });
    }
    
    async function removerAlugue(req, res) {
        await Aluguel.findOneAndDelete({_id: ObjectId(req.params.id)})
        .then(alugue => {
            if(alugue) return res.status(204).end();
            else return res.status(404).json('Aluguel deletado com sucesso!')
        })
        .catch(error => {return res.status(500).json({error}); });
    }
    
    module.exports = { listarAlugue, listarAluguePorId, criarAlugue, atualizarAlugue, removerAlugue};