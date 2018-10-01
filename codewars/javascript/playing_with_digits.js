// Source : https://www.codewars.com/kata/playing-with-digits/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-10-01

let { floor, sqrt, pow: p } = Math

let splitInt = n => {
  let recurse = (n, acc=[]) => {
    if(!n) return acc
    return recurse(floor(n / 10), acc.concat(n % 10))
  }
  return recurse(n).reverse()
}

let digPow = (n, exp) => {
  let ints = splitInt(n)
  let k = 1
  let sum = ints
    .map((int, i) => p(int, exp + i))
    .reduce((a, c) => a + c, 0)

  // return early if remainder exists:
  if(sum % n) return -1
  while(k < sum) {
    if(n * k === sum) return k
    k++
  }
  return -1
}

console.log(digPow(89, 1))    // => 1
console.log(digPow(92, 1))    // => -1
console.log(digPow(46288, 3)) // => 51
console.log(digPow(10383, 6)) // => 12933

