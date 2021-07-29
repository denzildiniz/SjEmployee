const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:[3 ,'min 4 characted requierd'] 
    },
    email:{
        type:String,
        requierd:true
    },
    designation:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('SjEmp' , empSchema);