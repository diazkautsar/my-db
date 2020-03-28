if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(routes)
app.use(errorHandler)

module.exports = app