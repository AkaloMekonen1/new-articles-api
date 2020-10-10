const express = require('express')
const router = express.Router()
const { getAllArticles, postAllArticles, patchAllArticles, deleteAllArticles, getArticle} = require('../controllers/articles')

router.get('/', getAllArticles)
router.post('/', postAllArticles)
router.get('/:articleId', getArticle)
router.patch('/:articleId', patchAllArticles)
router.delete('/:articleId', deleteAllArticles)

module.exports = router