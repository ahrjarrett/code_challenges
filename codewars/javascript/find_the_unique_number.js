// Source : https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-20

// O(n)
let findUniq = arr => {
  let [ first, second ] = arr
  let keep = first === second ? first : null
  if(keep !== null) return arr.find(e => e !== keep)
  return arr[2] === first ? second : first
}

// Clever solution, but O(log n) time complexity
let findUniq2 = arr => {
  let a = arr.sort((a, b) => b - a)
  return a[0] === a[1] ? a[a.length-1] : a[0]
}

console.log(findUniq([ 0, 1, 0 ]))             // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))    // 2
console.log(findUniq([ 0, 0.55, 0, 0, 0, 0 ])) // 0.55
console.log(findUniq([ 3, 10, 3, 3, 3 ]))      // 10
console.log(findUniq([ 4, 4, 4, 4, 5 ]))       // 5

