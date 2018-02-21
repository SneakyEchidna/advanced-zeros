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
  while (multiplier <= number) {
    multipliers.push(multiplier);
    multiplier *= factors[factors.length - 1];
  }
  // factors.map((e) => {
  //   let multiplier = e;
  //   while (multiplier <= number) {
  //     multipliers.push(multiplier);
  //     multiplier *= e;
  //   }
  // });
  const reducer = (sum, element) => sum + Math.floor(number / element);
  return multipliers.reduce(reducer, 0);
};
// const zerosCount = getZerosCount(10, 10);
// console.log(zerosCount);
