const express = require('express');

const sjApi = require('./routes/sjApi')
const notFound = require('./middleware/notFound')
const connDB = require('./db/conn')

require('dotenv').config()

const app = express();

const port = process.env.PORT || 2500;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}))

// routes
app.get('/',(req,res)=>{
    res.send("listerning")
})

app.use('/api/d1/sjApi', sjApi)

app.use(notFound)

const start = async () =>{
    try {
        await connDB(process.env.CONNECTION_STRING);
        app.listen(port, () =>{
            console.log(`listerning at port ${port}...`)
        })
        
    } catch (error) {
        console.log("data base conn err")
    }
}

start()