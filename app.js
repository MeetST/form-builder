import express from 'express'
import bodyParser from 'body-parser'
import initAPISVersions from './api'

const app = express()

global.rootRequire = function (name) {
  return require(`${__dirname}/${name}`)
}
global.rootPath = __dirname

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  next()
})

// initilize API versions
initAPISVersions(app, '')

module.exports = app
