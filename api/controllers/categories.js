const Category = require('../models/category')
const mongoose = require('mongoose')
const { json } = require('express')
module.exports = {
    getAllCategories: (req, res) =>{
        
        Category.find().then((categories)=>{
            res.status(200).json({
                categories
            })
        }).catch(error =>{
            res.status(500).json({
                error
            })
        })
    },
    postAllCategory : (req, res) =>{
        
        const { title, description } = req.body
        const category = new Category({
            _id: new mongoose.Types.ObjectId,
            title,
            description
        })
        category.save().then(()=>{
            res.status(200).json({
                message: 'Created Category'
            })
        }).catch(error =>{
            res.status(500).json({
                error
            })
        })
    },
    patchAllCategory: (req, res) =>{
        const articleId = req.params.articleId 
        res.status(200).json({
            message: `Create All Category - ${articleId}`
        })
    },
    deleteAllCategory: (req, res) =>{
        const articleId = req.params.articleId 
        res.status(200).json({
            message: `Delete All Category - ${articleId}`
        })
    }
}