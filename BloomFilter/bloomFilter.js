class BloomFilter {
  constructor() {}

  scaleImage(width, height, maxdim) {
    const scale = Math.min(maxdim / width, maxdim / height);
    return [scale * width, scale * height];
  }

}

module.exports = BloomFilter;