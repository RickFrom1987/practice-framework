const assert = require('assert');
const ProjectEuler = require('./ProjectEuler');

const PROBLEMS = [
  { q: '001', a: 233168 },
  { q: '002', a: null },
];

describe('ProjectEuler', function() {
  const pe = new ProjectEuler();
  PROBLEMS.map((p) => {
    describe(`#${p.q}`, function() {
      const result = pe.run(p.q);
      if (p.a) {
        assert.equal(result, p.a);
      }
    });
  });
});