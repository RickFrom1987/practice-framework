const assert = require('assert');
const ProjectEuler = require('./ProjectEuler');

describe('ProjectEuler', function() {
  const pe = new ProjectEuler();
  describe('#001', function() {
    const result = pe.run('001');
    console.log("result 001", result);
    assert(true);
  });
});