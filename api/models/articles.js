const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String
})