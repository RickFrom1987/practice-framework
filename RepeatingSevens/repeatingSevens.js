function regexVersion() {}

// regex version
class RepeatingSevens {
  constructor() {}

  solve() {
    // lksdjflksjaklf237fjdlksajdlkf7777sdlkj787877777
    const testStr = 'lksdjflksjaklf237fjdlksajdlkf7777sdlkj787877777';
    const matches = testStr.match(/(7{2,})/g);
    return matches;
  }

}

module.exports = RepeatingSevens;