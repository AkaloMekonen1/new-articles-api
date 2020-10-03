module.exports = {
    signup: (req, res) =>{
        res.status(200).json({
            message: 'signup user'
        })
    },
    login : (req, res) =>{
        res.status(200).json({
            message: 'login user'
        })
    }
}