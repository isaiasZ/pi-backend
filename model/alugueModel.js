const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const alugueSchema = new Schema({
    modelo:{
        type: String,
        required: [true, 'Informar modelo do veiculo'],
        trim: true,
    },
    retirada: {
        type: String,
        required: [true, 'Informar a data da retirada'],
        trim: true,
        
    },
    devolucao: {
        type: String,
        required: [true, 'Informar data de devolução'],
        trim: true,
        

    },
    valor: {
        type: String,
        required: [true, 'Informar valor total do aluguel'],
        trim: true,
        

    },

    situacao: {
        type: String,
        required: [true, 'Informar se ja foi pago ou não'],
        trim: true,
        
    }
})

module.exports = mongoose.model("Aluguel", alugueSchema);