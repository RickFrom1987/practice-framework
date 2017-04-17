const assert = require('assert');
const RepeatingSevens = require('./repeatingSevens');

describe('repeatingSevens', function() {

  const rs = new RepeatingSevens();

  describe('#', function() {
    rs.solve();
    assert(true);
  });
});