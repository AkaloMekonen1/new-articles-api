const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    title: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = mongoose.model('Category', categorySchema)