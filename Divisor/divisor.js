function arrMaxApply( arr ) {
  return Math.max.apply( null, arr );
};

function arrMaxSort(arr) {
  return arr.sort().pop();
}

function findDivisor(n1, n2) {
  const minNum = Math.min(n1, n2);
  const divisors = [];
  for (let i = 0; i <= n1; i++) {
    if (n1 % i === 0) {
      divisors.push(i);
    }
  }
  const results = divisors.filter((d, i) => {
    return (n2 % d === 0);
  });

  const result = arrMaxSort(results);
  return result || 0;
}

class Divisor {
  constructor() {}

  solve(n1, n2) {
    return findDivisor(n1, n2);
  }

}

module.exports = Divisor;