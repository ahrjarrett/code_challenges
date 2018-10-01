// Source : https://www.codewars.com/kata/unique-in-order/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-10-01

let uniqueInOrder = iterable => {
  let track = []
  iterable = Array.isArray(iterable) ? iterable : iterable.split('')
  return iterable.filter((x,_,arr) => {
    let seen = x === track[track.length-1]
    if(!seen) track.push(x)
    return !seen
  })
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // => ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))         // => ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))       // => [1, 2, 3]

