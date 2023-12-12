const express = require('express')
const cors = require('cors')

function expressConfig(app) {
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
}

module.exports = expressConfig