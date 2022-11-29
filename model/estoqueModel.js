const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const estoqueSchema = new Schema({
    compacto: {
        type: String,
        required: [true, 'Email não informado'],
        trim: true,
        
    },
    Modelo: {
        type: String,
        required: [true, 'Senha não informada'],
        trim: true,
        

    },
    Avaliacao: {
        type: String,
        required: [true, 'Avaliação nao informada'],
        trim: true,
        

    },

    Preco: {
        type: String,
        required: [true, 'Senha não informada'],
        trim: true,
        
    }
})

module.exports = mongoose.model("Estoque", estoqueSchema);