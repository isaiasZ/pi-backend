    const { ObjectId } = require('bson');
    const Aluguel = require('../model/aluguelModel');
    
    async function criarAluguel(req, res) {
        const aluguel = new Aluguel(req.body);
        const erros = []
         await aluguel.save()
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
    
    async function listarAluguel(req, res) {
        await Aluguel.find({})
        .then(alugue => {return res.json(alugue);})
        .catch(error => {return res.status(500).json({error}); });
    }
    
    async function listarAluguelPorId(req, res) {
        await Aluguel.findOne({_id: ObjectId(req.params.id)})
        .then(aluguel => {
            if(aluguel) return res.json(aluguel);
            else return res.status(404).json('Aluguel nao localizado')
        })
        .catch(error => {return res.status(500).json({error}); });
    }
    
    async function atualizarAluguel(req, res) {
        await Aluguel.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body,
        {runValidators: true})
        .then(aluguel => {
            if(aluguel) return res.status(204).end();
            else return res.status(404).json('Aluguel atualizado com sucesso!')
        })
        .catch(error => {return res.status(500).json({error}); });
    }
    
    async function removerAluguel(req, res) {
        await Aluguel.findOneAndDelete({_id: ObjectId(req.params.id)})
        .then(aluguel => {
            if(aluguel) return res.status(204).end();
            else return res.status(404).json('Aluguel deletado com sucesso!')
        })
        .catch(error => {return res.status(500).json({error}); });
    }
    
    module.exports = { listarAluguel, listarAluguelPorId, criarAluguel, atualizarAluguel, removerAluguel};
