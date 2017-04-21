const assert = require('assert');
const JSConcepts = require('./jsConcepts');

describe('JS Concepts', function() {
  const jsc = new JSConcepts();
  describe('#currying', function() {
    it('should curry', function() {
      const curryFn = jsc.curry('rice');
      const curryVal = curryFn('chicken');
      assert.equal(curryVal, 'I want some curry rice and chicken');
    });
  });
});