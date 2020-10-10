const Article = require('../models/articles')
const mongoose = require('mongoose')
const { json } = require('express')
module.exports = {
    getAllArticles: (req, res) =>{
        Article.find().then((article)=>{
            res.status(200).json({
                article
            })
        }).catch(error =>{
            res.status(500).json({
                error
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
    getArticle: (req,res) =>{
        const articleId = req.params.articleId 
        Article.findById(articleId).then(article =>{
            res.status(200).json({
                article
            })
        }).catch(error =>{
            res.status(500).json({
                error
            })
        })
    },
    patchAllArticles: (req, res) =>{
        const articleId = req.params.articleId 
        Article.updateOne({_id: articleId}, req.body).then(()=>{
            res.status(200).json({
                message: "Article Updated"
            })
        }).catch(error=>{
            res.status(500).json({
                error
            })
        })
    },
    deleteAllArticles: (req, res) =>{
        const articleId = req.params.articleId 
        res.status(200).json({
            message: `Delete Articles - ${articleId}`
        })
    }
}