const mongoose = require('mongoose');

const connDB= (url)=>{
    return mongoose.connect(url,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
}

module.exports = connDB