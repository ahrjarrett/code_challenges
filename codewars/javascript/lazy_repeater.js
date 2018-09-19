// Source : https://www.codewars.com/kata/lazy-repeater/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-18

let makeLooper = (str) => {
  let i = 0
  return () => {  
    if(i === str.length) i = 0
    return str[i++]
  }
}

let abc = makeLooper('abc')
console.log(abc()) // a
console.log(abc()) // b
console.log(abc()) // c
console.log(abc()) // a
console.log(abc()) // b
console.log(abc()) // c
console.log(abc()) // a

console.log('\n\n')

let abcdef = makeLooper('abcdef')
console.log(abcdef()) // a
console.log(abcdef()) // b
console.log(abcdef()) // c
console.log(abcdef()) // d
console.log(abcdef()) // e
console.log(abcdef()) // f
console.log(abcdef()) // a
console.log(abcdef()) // b
console.log(abcdef()) // c
console.log(abcdef()) // d
console.log(abcdef()) // e
console.log(abcdef()) // f
console.log(abcdef()) // a
