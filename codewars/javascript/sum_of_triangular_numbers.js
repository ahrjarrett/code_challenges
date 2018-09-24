// Source : https://www.codewars.com/kata/sum-of-triangular-numbers/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-23

let getNthTriNum = (n, sum=0) =>
  n === 1 
    ? 1 + sum
    : getNthTriNum(n - 1, sum + n)

let sumTriangularNumbers = (n, sum=0) => 
  n <= 0
    ? sum
    : sumTriangularNumbers(n - 1, sum + getNthTriNum(n))
