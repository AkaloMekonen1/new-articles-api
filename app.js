const express = require('express')
const app = express()
const morgan = require('morgan')
const articleRoute = require('./api/routes/articles')
const categoriesRoute = require('./api/routes/categories')
const usersRoute = require('./api/routes/users')
app.use(morgan("dev"))

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept, Authorization")
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({});
    }
    next()
})

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

//Routes
app.use('/articles', articleRoute)
app.use('/categories', categoriesRoute)
app.use('/users', usersRoute)


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