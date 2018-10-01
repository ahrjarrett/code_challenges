// Source : https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-10-01

let deleteNth = (arr,n) => {
  let map = {}
  return arr.filter(x => {
    let flag = map[x] >= n
    map[x] = map[x] ? map[x] + 1 : 1
    return !flag
  })
}

console.log(deleteNth([20,37,20,21], 1))       // => [20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // => [1, 1, 3, 3, 7, 2, 2, 2]


