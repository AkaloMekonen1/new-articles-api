const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    title: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: true},
    categoryId: { type: mongoose.Schema.Types.ObjectID, required: true, ref: 'Category'}
})

module.exports = mongoose.model('Article', articleSchema)