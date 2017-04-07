const FIZZ = 'Fizz';
const BUZZ = 'Buzz';

class FizzBuzz {
  constructor() {}
  solve(){
    const results = [];
    for(let i = 1; i <= 100; i++) {
      const f = i % 3 === 0;
      const b = i % 5 === 0;
      const result = f ? (b ? 'FizzBuzz' : 'Fizz') : (b ? 'Buzz' : i);
      results.push(result);
    }
    return results;
  }

}

module.exports = FizzBuzz;