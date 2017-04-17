const express = require('express')
const path = require('path')

const routesApi = require('./routes/api')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', routesApi)
app.use('/carousel', express.static(path.join(__dirname, '../client')))

app.get('*', function (req, res) {
  res.redirect('/carousel')
})
module.exports = app
