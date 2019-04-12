// Source : https://www.codewars.com/kata/make-a-spiral/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30

/*
 * Your task, is to create a NxN spiral with a given size.

 * For example, spiral with size 5 should look like this:

 *     00000
 *     ....0
 *     000.0
 *     0...0
 *     00000

 * Or: [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]

 * and with the size 10:

 *     0000000000
 *     .........0
 *     00000000.0
 *     0......0.0
 *     0.0000.0.0
 *     0.0..0.0.0
 *     0.0....0.0
 *     0.000000.0
 *     0........0
 *     0000000000

 * Because of the edge-cases for tiny spirals, the size will be at least 5.

 * General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
 */


let spiralize = n => {
  let M = new Array(n).fill(new Array(n).fill(0))

  return M
}

console.log(spiralize(5))
// => [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
console.log(spiralize(10))

