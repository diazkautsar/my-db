if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    require('dotenv').config()
}

const express = require('express')
const app = express()

module.exports = app