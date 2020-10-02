const express = require('express')
const app = express()

app.use((req, res, next) =>{
    
})
app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Hello World 3"
    })
})

module.exports = app