const assert = require('assert');
const ImageScale = require('./imageScale');

describe('imageScale', function() {

  const is = new ImageScale();

  describe('#solve()', function() {
    const WIDTH = 100;
    const HEIGHT = 100;
    const MAX_DIM = 100;

    it('should scale a square image', function() {
      const result = is.scaleImage(100, 100, MAX_DIM);
      assert.deepEqual(result, [100,100]);
    });

    it('should scale a landscape image by width', function() {
      const result = is.scaleImage(200, 100, MAX_DIM);
      assert.deepEqual(result, [100,50]);
    });

    it('should scale a portrait image by height', function() {
      const result = is.scaleImage(100, 200, MAX_DIM);
      assert.deepEqual(result, [50,100]);
    });

  });
});