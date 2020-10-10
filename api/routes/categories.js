const express = require('express')
const router = express.Router()
const { getAllCategories, postAllCategory, patchAllCategory, deleteAllCategory, getCategory} = require('../controllers/categories')

router.get('/', getAllCategories)
router.post('/', postAllCategory)
router.get('/:categoryId', getCategory)
router.patch('/:categoryId', patchAllCategory)
router.delete('/:categoryId', deleteAllCategory)

module.exports = router