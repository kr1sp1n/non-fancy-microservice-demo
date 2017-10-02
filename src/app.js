var assert = require('assert')
var express = require('express')
var helmet = require('helmet')

var testApp = require('./apps/test')

function logConfig (log, config) {
  return function (err) {
    if (err) return log.error(err)
    log.info(config)
  }
}

module.exports = function (config) {
  assert(config.port, 'Please set config.port.')

  var log = require('./logger')(config.log)

  var app = express()
  app.start = function () {
    app.listen(config.port, logConfig(log, config))
  }

  app.use(helmet())
  app.use(require('./middlewares/errorLogger')(log))
  app.use(require('./middlewares/errorHandler')(log))

  app.use('/test', testApp)

  return app
}
