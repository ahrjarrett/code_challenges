// Source : https://www.codewars.com/kata/last-digit-of-a-huge-number/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30

let lastDigit = xs => xs.reduceRight((prev, curr, i) => {
  let exp = prev < 4
    ? prev
    : prev % 4 + 4

  let base = i === 0
    ? curr % 10
    : curr < 4
      ? curr
      : (curr % 4 + 4)

  return Math.pow(base, exp)
}, 1) % 10


console.log(lastDigit([12,30,21]))             // => 6
console.log(lastDigit([2,2,2,0]))              // => 4
console.log(lastDigit([937640,767456,981242])) // => 0
console.log(lastDigit([123232,694022,140249])) // => 6
console.log(lastDigit([499942,898102,846073])) // => 6
console.log(lastDigit([ 7, 6, 1 ]))            // => 9
console.log(lastDigit([ 2, 2, 2, 0 ]))         // => 4
console.log(lastDigit([ 2, 2, 1 ] ))           // => 4
console.log(lastDigit([ 2, 2, 1, 2 ]))         // => 4
console.log(lastDigit([ 3, 2, 1, 4, 4 ]))      // => 9
console.log(lastDigit([2,2,101,2]))            // => 6
console.log(lastDigit([2,2,1,2]))              // => 4

