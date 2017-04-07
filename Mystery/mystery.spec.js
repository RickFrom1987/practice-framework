const assert = require('assert');
const Mystery = require('./mystery');

describe('mystery', function() {
  const m = new Mystery();
  describe('#solve()', function() {
    it('should', function() {
      const answer = m.solve();
      assert.equal(answer, 10);
    });
  });
});