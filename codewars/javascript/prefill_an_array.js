// Source : https://www.codewars.com/kata/prefill-an-array/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-23

let prefill = (n, v=undefined) => {
  if(n < 0 || `${~~n}` !== `${n}` || typeof parseInt(n) !== 'number')
    throw new TypeError(`${n} is invalid`)
  return n === 0 ? [] : new Array(+n).fill(v)
}

console.log(prefill(3,1))                      // => [1,1,1]
console.log(prefill(2,'abc'))                  // => ['abc','abc']
console.log(prefill('1',1))                    // => [1]
console.log(prefill(3, prefill(2,'2d')))       // => [['2d','2d'],['2d','2d'],['2d','2d']]
try { prefill('xyz', 1) }
catch(e) {
  console.log(e.name === "TypeError")          // => true
  console.log(e.message === "xyz is invalid")  // => true
}
