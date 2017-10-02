module.exports = function () {
  return {
    port: process.env.PORT || 3000,
    log: {
      level: 'debug'
    }
  }
}
