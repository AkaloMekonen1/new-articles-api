const Article = require('../models/articles')
const mongoose = require('mongoose')
module.exports = {
    getAllArticles: (req, res) =>{
        res.status(200).json({
            message: 'Get All Articles'
        })
    },
    postAllArticles : (req, res) =>{
        const { title, description, content } = req.body
        const Article = new Article({
            _id: new mongoose.Types.ObjectId,
            title,
            description,
            content
        })
        article.save().then(res.status(200).json({
            message: 'Created Articles'
        }))
    },
    patchAllArticles: (req, res) =>{
        const articleId = req.params.articleId 
        res.status(200).json({
            message: `Update Articles - ${articleId}`
        })
    },
    deleteAllArticles: (req, res) =>{
        const articleId = req.params.articleId 
        res.status(200).json({
            message: `Delete Articles - ${articleId}`
        })
    }
}