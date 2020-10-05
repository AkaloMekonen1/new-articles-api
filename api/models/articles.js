const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.type.objectID,
    title: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: true}
})