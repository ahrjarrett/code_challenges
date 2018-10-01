// Source : https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30

let spinWords = words => words.split(' ').map(w => {
  return w.length > 4
    ? w.split('').reverse().join('')
    : w
}).join(' ')


console.log(spinWords("Hey fellow warriors")) // =>  "Hey wollef sroirraw"

