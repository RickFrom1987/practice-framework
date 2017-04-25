const assert = require('assert');
const DataStructures = require('./dataStructures');

describe('Data Structures', function() {
  const ds = new DataStructures();
  describe('#DFS', function() {
    it('should find something using Depth first search', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});