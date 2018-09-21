// Source : https://www.codewars.com/kata/count-characters-in-your-string/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-21

/* 
 * The main idea is to count all the occuring characters(UTF-8) in string. 
 * If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
 * What if the string is empty ? Then the result should be empty object literal { }
 */

let count = str => str.split('')
  .reduce((acc, curr) => {
    if(acc[curr]) acc[curr] += 1
    else acc[curr] = 1
    return acc
  }, {})
