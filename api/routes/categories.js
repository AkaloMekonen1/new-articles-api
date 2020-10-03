const express = require('express')
const router = express.Router()
const { getAllCategories, postAllCategory, patchAllCategory, deleteAllCategory} = require('../controllers/categories')

router.get('/', getAllCategories)
router.post('/', postAllCategory)
router.patch('/articleId', patchAllCategory)
router.delete('/articleId', deleteAllCategory)

module.exports = router