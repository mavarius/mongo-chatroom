// LOAD ENVIRONMENT VARIABLES
require('dotenv').config({ silent: true })

// CONSTANTS
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongochat'

// REQUIRES
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.config')

// CONNECT TO MONGODB
const mongoose = require('mongoose')

mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, err => console.log(err || `Mongo connected to ${MONGODB_URI}`))

// APP DECLARATION
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

// SERVER LISTEN
server.listen(PORT, err => console.log(err || `Express listening on port ${PORT}`))

// GENERAL MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.static('src'))

// WEBPACK CONFIGURATION
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath, noInfo: true }))
app.use(webpackHotMiddleware(compiler))

// SOCKET CONFIG
require('./config/socket')(app, io)

// ROUTES
app.use('/api', require('./routes/api'))
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')))
