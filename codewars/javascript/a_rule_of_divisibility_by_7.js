// Source : https://www.codewars.com/kata/a-rule-of-divisibility-by-7/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-23

let seven = m => {
  let recurse = (m, c=0) => {
    if(('' + m).length <= 2) return [m, c]
    let rem = m % 10
    let _m = ((m - rem) / 10) - 2 * rem
    return recurse(_m, c + 1)
  }
  return recurse(m)
}

console.log(seven(1603)) // => [7, 2]
console.log(seven(371))  // => [35, 1]
console.log(seven(483))  // => [42, 1]
