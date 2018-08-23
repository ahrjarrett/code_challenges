// Source : https://www.codewars.com/kata/find-the-next-perfect-square/train/
// Author : Andrew Jarrett
// Date   : 2018-08-23

const findNextSquare = sq => {
  // Return the next square if sq if a perfect square, -1 otherwise
  let sqrt = Math.sqrt(sq)
  return Number.isInteger(sqrt)
    ? Math.pow(sqrt + 1, 2)
    : -1
  }

