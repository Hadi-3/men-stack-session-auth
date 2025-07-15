require('dotenv').config()
const express = require('express')
const app = express()
const methodOveride = require('method-override')
const morgan = require('morgan')
const mongoose = require('mongoose')

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`Connected tp MongoDB ${mongoose.connection.name}`)
})

// MIDDLEWARE
app.use(express.urlencoded({extended: false}))
app.use(methodOveride('_method'))
app.use(morgan('dev'))

const port = process.env.PORT ? process.env.PORT : "3000"

app.get('/', (req, res) => {
    res.render('index.ejs', {title: 'My App!'})
})

app.listen(port, () => {
    console.log(`The express app is ready on port ${port}`)
})