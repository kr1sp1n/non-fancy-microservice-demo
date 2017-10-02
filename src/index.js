var config = require('./config')()
var app = require('./app')(config)

app.start()
