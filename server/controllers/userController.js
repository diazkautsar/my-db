const { User } = require('../models')
const { checkPassword } = require('../helpers/password')
const { sign } = require('../helpers/jwt')

module.exports = {
    register: async (req, res, next) => {
        const { username, email, password } = req.body
        try {
            const response = await User.create({
                username, email, password
            })
            res.status(200).json({
                data: response,
                msg: 'register success'
            })
        } catch(err) {
            next(err)
        }
    },
    login: async (req, res, next) => {
        const { inputUser, password } = req.body
        const promises = [
            User.findOne({
                where: { username: inputUser }
            }),
            User.findOne({
                where: { email: inputUser }
            })
        ]
        const response = await Promise.all(promises)
        if (response[0] !== null) {
            const passwordCheck = checkPassword(password, response[0].password)
            if (!passwordCheck) {
                next({
                    status: 401,
                    msg: 'Invalid username/password'
                })
            } else {
                const token = sign({
                    id: response[0].id,
                    email: response[0].email,
                    password: response[0].password
                })
                res.status(200).json({
                    token,
                    msg: 'login success'
                })
            }
        } else if (response[1] !== null) {
            const passwordCheck = checkPassword(password, response[1].password)
            if (!passwordCheck) {
                next({
                    status: 401,
                    msg: 'Invalid email/password'
                })
            } else {
                const token = sign({
                    id: response[1].id,
                    email: response[1].email,
                    password: response[1].password
                })
                res.status(200).json({
                    token,
                    msg: 'login success'
                })
            }
        } else {
            next({
                status: 401,
                msg: 'Invalid email/password'
            })
        }
    }
}