module.exports = (err, req, res, next) => {
    console.log(err)
    if (err.name === 'SequelizeUniqueConstraintError' && err.errors[0].message === 'username must be unique') {
        res.status(400).json({
            msg: 'username already registered'
        })
    } else if (err.name === 'SequelizeUniqueConstraintError' && err.errors[0].message === 'email must be unique') {
        res.status(400).json({
            msg: 'email already registered'
        })
    } else if (err.name === 'SequelizeValidationError') {
        res.status(400).json({
            msg: err.errors[0].message
        })
    } else {
        res.status(err.status || 500).json({
            msg: err.msg || "internal server error"
        })
    }
}