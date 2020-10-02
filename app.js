const express = require('express')
const app = express()

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept, Authorization")
})
app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Hello World 3"
    })
})

module.exports = app