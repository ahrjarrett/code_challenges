// Source : https://www.codewars.com/kata/mutual-recursion/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-21

let F = n => n === 0 ? 1 : n - M(F(n - 1))
let M = n => n === 0 ? 0 : n - F(M(n - 1))

// F(21) :: 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13
// M(21) :: 0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9, 10, 11, 11, 12, 12

console.log(F(0)) // => 1
console.log(M(0)) // => 0
console.log(F(20)) // => 13
console.log(M(20)) // => 12
