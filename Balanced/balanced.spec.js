const assert = require('assert');
const Balanced = require('./balanced');

describe('Balanced', function() {
  describe('#solve()', function() {
    const b = new Balanced();
    it('([]) is balanced', function() {
      const testString = '([])';
      const test = b.solve(testString);
      assert.equal(test,true);
    });
    it('([)] is not balanced', function() {
      const testString = '([)]';
      const test = b.solve(testString);
      assert.equal(test, false);
    });
  });
});