var test = require('tape')
var request = require('supertest')

var config = require('../src/config')()
var app = require('../src/app')(config)

test('GET /test', function (assert) {
  assert.plan(2)
  request(app)
    .get('/test')
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      assert.error(err, 'No error')
      var body = res.body
      assert.same(body, {})
    })
})
