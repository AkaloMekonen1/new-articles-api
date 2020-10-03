const express = require('express')
const router = express.Router()
const { getAllArticles, postAllArticles, patchAllArticles, deleteAllArticles} = require('../controllers/articles')

router.get('/', getAllArticles)
router.post('/', postAllArticles)
router.patch('/:articleId', patchAllArticles)
router.delete('/:articleId', deleteAllArticles)

module.exports = router