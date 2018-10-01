// Source : https://www.codewars.com/kata/rectangle-into-squares/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30


let sqInRect = (l, w) => {
  if(l === w) return null
  
  let recurse = (l, w, acc=[]) => {
    if(l > w) {
      return recurse(l-w, w, acc.concat(w))
    }
    if(l < w) {
      return recurse(l, w-l, acc.concat(l))
    }
    // Basecase: l === w
    return acc.concat(l)
  }
  return recurse(l, w)
}

console.log(sqInRect(5, 5))   // => null
console.log(sqInRect(5, 3))   // => [3, 2, 1, 1]
console.log(sqInRect(3, 5))   // => [3, 2, 1, 1]
console.log(sqInRect(20, 14)) // => [14, 6, 6, 2, 2, 2]

