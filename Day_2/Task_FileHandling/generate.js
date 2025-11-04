// generate.js
function generateFibonacci(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}

module.exports = generateFibonacci;


// Starts with [0, 1]
// Then, each next number = sum of the previous two.
// Returns the entire series as an array.