const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:[3 ,'min 4 characted requierd'],
        unique:true 
    },
    email:{
        type:String,
        requierd:true,
        unique:true 
    },
    designation:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('SjEmp' , empSchema);