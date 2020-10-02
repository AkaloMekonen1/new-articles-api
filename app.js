const express = require('express')
const app = express()

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept, Authorization")
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({});
    }
    next()
})
app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Hello World 3"
    })
})

app.use((req, res, next) =>{
   const error = new Error('Not Found')
   error.status = 404
   next(error)
})
app.use((error,req, res, next)=>{
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app