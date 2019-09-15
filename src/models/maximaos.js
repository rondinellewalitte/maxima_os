const mongoose = require('../database/index');
const Schema = mongoose.Schema;


const schema = new Schema({
    nome:{
        type:String,
        required:true,
        trim: true
    },
    geo_latitude:{
        type: [Number],
        required: true
    },
    geo_longitude:{
        type: [Number],
        required: true
    },
    endereco:{
        type:String,
        required:true,
    },
    motivo:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Maximaos',schema);