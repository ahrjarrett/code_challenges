// Source : https://www.codewars.com/kata/count-the-digit/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-23

let nbDig = (n, d) => {
  let sqs = ''
  let k = 0
  let regex = new RegExp(`${d}`, 'g')
  while(k <= n) {
    sqs += k*k
    k++
  }
  return sqs.match(regex).length
}

console.log(nbDig(10, 1))  // => 11
console.log(nbDig(25, 1))  // => 11
console.log(nbDig(5750, 0))  // => 4700
console.log(nbDig(11011, 2)) // => 9481
console.log(nbDig(12224, 8)) // => 7733
console.log(nbDig(11549, 1)) // => 11905
