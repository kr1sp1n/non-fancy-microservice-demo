module.exports = function (log) {
  return function (err, req, res, next) {
    res.status(500)
    res.send({ error: err })
  }
}
