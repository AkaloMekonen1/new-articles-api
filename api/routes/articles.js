const express = require('express')
const router = express.Router()

router.get('/articles', (req, res) =>{
    res.status(200).json({
        message: 'Get All Articles'
    })
})

module.export = router