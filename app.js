const express = require('express');
const cors = require('cors')

const sjApi = require('./routes/sjApi')
const notFound = require('./middleware/notFound')
const connDB = require('./db/conn')
const errorhandlerMiddleware = require('./middleware/error-handler')

require('dotenv').config()

const app = express();

const port = process.env.PORT || 2500;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cors())

// routes
app.get('/',(req,res)=>{
    res.send(`<h1>Try our route /api/d1/sjApi</h1>`)
})

// api route
app.use('/api/d1/sjApi', sjApi)

// not found route
app.use(notFound)
app.use(errorhandlerMiddleware)

// conn to DB
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