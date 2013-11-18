var createValidator = require('../')
  , assert = require('assert')

/* global describe, it */

describe('Number or null validator', function () {

  it('should allow null', function (done) {
    createValidator()('waitTime', 'waitTime', { waitTime: null }, function (err, message) {
      assert(!err)
      assert(!message)
      done()
    })
  })

  it('should allow numbers', function (done) {
    createValidator()('waitTime', 'waitTime', { waitTime: 10 }, function (err, message) {
      assert(!err)
      assert(!message)
      done()
    })
  })

  it('should provide an error message for non-numbers', function (done) {
    createValidator()('waitTime', 'waitTime', { waitTime: 'abc' }, function (err, message) {
      assert(!err)
      assert.equal(message, 'waitTime must be a number if present')
      done()
    })
  })

  it('should provide an error message for NaN', function (done) {
    createValidator()('waitTime', 'waitTime', { waitTime: 1 / 'abc' }, function (err, message) {
      assert(!err)
      assert.equal(message, 'waitTime must be a number if present')
      done()
    })
  })

})