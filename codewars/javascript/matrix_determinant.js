// Source : https://www.codewars.com/kata/52a382ee44408cea2500074c/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-22

/*
  
 * Write a function that accepts a square matrix (n x n 2D array) and returns the 
 * determinant of the matrix.

 * How to take the determinant of a matrix -- it is simplest to start with the smallest
 * cases: A 1x1 matrix |a| has determinant a. A 2x2 matrix [[a, b], [c, d]] or

 *    |a b|
 *    |c d|

 * has determinant ad - bc.

 * The determinant of an n x n sized matrix is calculated by reducing the problem to 
 * the calculation of the determinants of n n-1 x n-1 matrices. For the 3x3 case, 
 * [[a, b, c], [d, e, f], [g, h, i]] or

 *    |a b c|
 *    |d e f|
 *    |g h i|

 * the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) 
 * where det(a_minor) refers to taking the determinant of the 2x2 matrix 
 * created by crossing out the row and column in which the element a occurs, or

 *    |e f|
 *    |h i|

 * Note the alternation of signs.

 * The determinant of larger matrices are calculated analogously, e.g. if 
 * M is a 4x4 matrix with first row [a, b, c, d], 
 * det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)

 */

/* 
 * My own notes:

 * To get the determinant of a smaller matrix, you multiply the diagonals, then 
 * subtract the product of the other diagonals.

 * Given the following matrix A:
 
 *    | a11 a12 a13 |
 *    | a21 a22 a23 |
 *    | a31 a32 a33 |

 * We can calculate the determinant by doing:

 * det(A) = |A| =

 *   = a11 |a22 a23| - a12 |a21 a23| + a13 |a21 a22|
 *         |a32 a33|       |a31 a33|       |a31 a32|
 
 * Then: 

 *    a11(a22 * a33 - a23 * a32) - a12(a21*a33-a23*a31) + a13(a21*a32-a22*a31)
 */

// Helpers:
let getRow = (M, row) => M[row]
let rmRow = (M, row) => M.filter((_, i) => i !== row)
let rmCol = (M, col) =>
  M.map(row =>
    row.filter((r, i) => i !== col))
let getCol = (M, col) =>
  M.map(row =>
    row.filter((r, i) => i === col))
    .map(r => r[0])

let determinant = M => M[0].length === 1
  ? M[0][0]
  : det(M)

let det2x2 = (M, mult=1) => {
  let [[a1, a2], [b1, b2]] = M
  return mult * ((a1 * b2) - (a2 * b1))
}

let det = (M, mult=1) => {
  // Base case: 2x2 matrix:
  if(M.length === 2) return det2x2(M, mult)
  let [ r0, ...rows ] = M

  // ms :: Matrix -> Array[Matrix]
  let ms = M.map((row, i) => rmCol(rows, i))
  return mult * ms.reduce((acc, m, i) => {
    return acc + det(m, i % 2 ? -(r0[i]) : r0[i])
  }, 0)
}

m1 = [ [1] ]
m2 = [ [1, 3], [2,8] ]
m3 = [ [2,5,3], [1,-2,-1], [1,3,4] ]
m4 = [ [9,2,5,3], [8,1,-2,-1], [7,1,3,4], [6,3,1,-3] ]

console.log(determinant(m1))     // => 1
console.log(determinant(m2))     // => -1
console.log(determinant(m3))     // => -20
console.log(determinant(m4))     // => -150

console.log(det(m2))             // => 2
console.log(det(m2, 7))          // => 14
console.log(det2x2(m2))          // => 2
console.log(det2x2(m2, 6))       // => 12

console.log(getCol(m3, 1))       // => [ 5, -2, 3 ]
console.log(rmCol(m3, 1))        // => [ [ 2, 3 ], [ 1, -1 ], [ 1, 4 ] ]
console.log(getRow(m3, 2))       // => [ 1, 3, 4 ]
console.log(rmRow(m3, 1))        // => [ [ 2, 5, 3 ], [ 1, 3, 4 ] ] 
