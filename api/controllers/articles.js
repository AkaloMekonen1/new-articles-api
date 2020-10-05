const Article = require('../models/articles')

module.exports = {
    getAllArticles: (req, res) =>{
        res.status(200).json({
            message: 'Get All Articles'
        })
    },
    postAllArticles : (req, res) =>{
        const { title, description, content } = req.body
        res.status(200).json({
            message: 'Create All Articles'
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