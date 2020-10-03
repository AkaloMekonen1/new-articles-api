module.exports = {
    getAllCategories: (req, res) =>{
        res.status(200).json({
            message: 'Get All Categories'
        })
    },
    postAllCategory : (req, res) =>{
        res.status(200).json({
            message: 'Create All Category'
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