// Source : https://www.codewars.com/kata/snail/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30

/*
 * Given an n x n array, return the array elements arranged from 
 * outermost elements to the middle element, traveling clockwise.

 *     array = [[ 1, 2, 3],
 *              [ 8, 9, 4],
 *              [ 7, 6, 5],
 *     snail(array) #=> [1,2,3,4,5,6,7,8,9]
 
 *     array = [[ 1,  2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 *     snail(array) #=> [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

 *     array = [[ 1,  2,  3,  4, 5],
 *              [16, 17, 18, 19, 6],
 *              [15, 24, 25, 20, 7],
 *              [14, 23, 22, 21, 8],
 *              [13, 12, 11, 10, 9]]
 *     snail(array) #=> [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

 */

let snail = array => {
  let result = []
  
  while (array.length > 1 && array[0].length > 1) {
    result.push(...unwind(array))

    array.shift()
    array.pop()
    
    for (let y = 0; y < array.length; y++) {
      array[y].shift()
      array[y].pop()
    }
  }
  
  if (array.length > 0 && array[0].length > 0) {
    result.push(array[0][0])	
  }
  
  return result
}

let unwind = array => {
  let values = array[0]
  
  for (let y = 1; y < array.length; y++)
    values.push(array[y][array[y].length - 1])
  
  let last = array[array.length - 1]
  last.pop()
  values.push(...last.reverse())

  for (let y = array.length - 2; y > 0; y--)
    values.push(array[y][0])
  
  return values
}

console.log(snail([[1,2,3],[8,9,4],[7,6,5]]))
// => [1,2,3,4,5,6,7,8,9]
console.log(snail([[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]))
// => [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
console.log(snail(
  [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]))
// => [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
