const express = require('express')
const router = express.Router()
const { getAllArticles, postAllArticles, patchAllArticles, deleteAllArticles, getArticle} = require('../controllers/articles')
const upload = require('../middlewares/upload')

router.get('/', getAllArticles)
router.post('/', upload, postAllArticles)
router.get('/:articleId', getArticle)
router.patch('/:articleId', patchAllArticles)
router.delete('/:articleId', deleteAllArticles)

module.exports = router