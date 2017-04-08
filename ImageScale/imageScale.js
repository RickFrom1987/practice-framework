/*
  Fill in the ? with a Javascript expression
  to set the scale ratio for an image having a given height and width
  so that it can exactly fit inside a maxdim-by-maxdim square area 
  touching at least two edges).

  function scaleImage(width, height, maxdim) {
    var scale = ?;
    return [scale * width, scale * height];
  }
*/

class ImageScale {
  constructor() {}

  scaleImage(width, height, maxdim) {
    const scale = Math.min(maxdim / width, maxdim / height);
    return [scale * width, scale * height];
  }

}

module.exports = ImageScale;