const jwt = require('jsonwebtoken')

module.exports = {
    sign: (param) => {
        const token = jwt.sign(param, process.env.PRIVATEKEY)
        return token
    },
    verify: (token) => {
        const result = jwt.verify(token, process.env.PRIVATEKEY)
        return result
    }
}