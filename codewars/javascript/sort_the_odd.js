// Source : https://www.codewars.com/kata/sort-the-odd/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-10-01

function sortArray(array) {
  let odds = []
  let idxs = []  
  array.forEach((n, i) => {
    if(n % 2) {
      odds.push(n)
      idxs.push(i)
    }
  })
  odds.sort((a, b) => a - b)
  idxs.sort((a, b) => a - b)

  return array.map((n, i) => {
    let idx = idxs.indexOf(i)
    return idx !== -1 ? odds[idx] : n
  })
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) // => [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 1, 3, 8, 0]))    // => [1, 3, 5, 8, 0]
console.log(sortArray([]))                 // => []

