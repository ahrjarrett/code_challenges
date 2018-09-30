// Source : https://www.codewars.com/kata/array-dot-diff/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30

/*
 * Your goal in this kata is to implement a difference function, which 
 * subtracts one list from another and returns the result.

 * It should remove all values from list a, which are present in list b, e.g:

       array_diff([1,2],[1]) == [2]

 * If a value is present in b, all of its occurrences must be removed from the other:

       array_diff([1,2,2,2,3],[2]) == [1,3]

 */

let array_diff = (a, b) => a.filter(x => !b.includes(x))

console.log(array_diff([], [4,5]))   // => []
console.log(array_diff([3,4], [3]))  // => [4]
console.log(array_diff([1,8,2], [])) // => [1,8,2]

