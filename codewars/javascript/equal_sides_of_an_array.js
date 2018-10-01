// Source : https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
// Author : Andrew Jarrett

let sum = (a, c) => a + c

let findEvenIndex = arr => {
  let l, r, n
  for(let i = 0; i < arr.length; i++) {
    l = !i ? 0 : arr.slice(0, i).reduce(sum, 0)
    r = !i ? arr.reduce(sum, 0) : arr.slice(i+1).reduce(sum, 0)
    if(l === r) n = i
  }
  return n || -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))        // => 3
console.log(findEvenIndex([1,100,50,-51,1,1]))     // => 1
console.log(findEvenIndex([1,2,3,4,5,6]))          // => -1
console.log(findEvenIndex([20,10,30,10,10,15,35])) // => 3

