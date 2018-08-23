// This was working for the number 6, and then it suddenly stopped...??
function findFactors(n) {
  var factors = []
  var factor = 1
  while(factor <= n) {
    if(n % (n / factor) === 0) {
      factors.push(factor)
      factor = factor + 1
    }
  }
  return factors
}

console.log(findFactors(6))
