const assert = require('assert');
const Divisor = require('./divisor');

describe('Find the greatest divisor between two numbers', function() {

  const d = new Divisor();

  describe('#solve fn(0, 0) = 0', function() {
    // fn(14, 21) = 7 
    const greatestDivisor = d.solve(0, 0);
    assert.equal(greatestDivisor, 0);
  });

  describe('#solve fn(1, 1) = 1', function() {
    // fn(14, 21) = 7 
    const greatestDivisor = d.solve(1, 1);
    assert.equal(greatestDivisor, 1);
  });

  describe('#solve fn(14, 21) = 7', function() {
    // fn(14, 21) = 7 
    const greatestDivisor = d.solve(14, 21);
    assert.equal(greatestDivisor, 7);
  });

});