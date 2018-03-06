module.exports = function getZerosCount(number, base) {
  const findFactors = (left) => {
    let factors = [];
    for (let i = 2; i <= left; i++) {
      while (left % i === 0) {
        factors.push(i);
        left /= i;
      }
    }
    return factors;
  };
  let multipliers = [];
  let factors = findFactors(base);
  let multiplier = factors[factors.length - 1];
  let sqr = 0
  let lastEl = factors[factors.length - 1];
  while (lastEl && lastEl === multiplier) {
    sqr++;
    lastEl = factors[factors.length - (1 + sqr)]
  }
  while (multiplier <= number) {
    multipliers.push(multiplier);
    multiplier *= factors[factors.length - 1];
  }

  const reducer = (sum, element) => sum + Math.floor(number / element);
  return Math.floor(multipliers.reduce(reducer, 0) / sqr);
};
