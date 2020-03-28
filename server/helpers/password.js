const bcrypt = require('bcryptjs')

module.exports = {
    hashPassword: (password) => {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        return hash 
    },
    checkPassword: (input, db) => {
        return bcrypt.compareSync(input, db)
    }
}