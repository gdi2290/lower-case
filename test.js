var assert    = require('assert');
var lowerCase = require('./');

describe('lower case', function () {
  it('should lower case a string', function () {
    assert.equal(lowerCase('TEST'), 'test');
  });
});