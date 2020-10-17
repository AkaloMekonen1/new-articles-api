const multer = require('multer')

const fileFilter = (req, file, cb)=>{
    if(file.mimetype === 'image.png' || file.mimetype === 'image.jpeg'){
        cb(null, true)
    }
    cb(null, false)
}
const upload = multer({
    dest: 'uploads/',
    limits:{
        fileSize: 1024 * 1024 * 2
    },
    fileFilter
})

module.exports = upload