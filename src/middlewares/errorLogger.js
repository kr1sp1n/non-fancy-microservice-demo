module.exports = function (log) {
  return function (err, req, res, next) {
    log.info('Log error!')
    log.error(err.stack)
    next(err)
  }
}
