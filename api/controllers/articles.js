const Article = require('../models/articles')
const mongoose = require('mongoose')
module.exports = {
    getAllArticles: (req, res) =>{
        Article.find().then(()=>{
            res.status(200).json({
                message: 'Get All Articles'
            })
        })
    },
    postAllArticles : (req, res) =>{
        const { title, description, content } = req.body
        const article = new Article({
            _id: new mongoose.Types.ObjectId,
            title,
            description,
            content
        })
        article.save().then(()=>{
            res.status(200).json({
                message: 'Created Articles'
            })
        }).catch(error =>{
            res.status(500).json({
                error
            })
        })
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