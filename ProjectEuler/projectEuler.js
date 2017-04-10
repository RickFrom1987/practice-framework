class ProjectEuler {
  constructor() {}
  run(problem) {
    const p = require(`./${problem}`);
    if(!p.solve) {
      throw new Error(`${problem} Solve not found.`)
    }
  }
}

module.exports = ProjectEuler;