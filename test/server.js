const fs = require('fs')
const path = require('path')

const express = require('express')
const app = express()

const http = require('http')

const server = http.createServer(app)

process.env.NODE_ENV = 'production'
const mountPath = require('../vue.config').baseUrl
app.use(mountPath, express.static(path.resolve(__dirname, '../dist')))

const { port, before } = require('../vue.config').devServer

before && before(app)

server.listen(port, function () {
  console.log('Listening on port %d', port)
})

// const open = require('opener')
// open(`http://localhost:${port}`)

