// Source : https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-20

/* In this kata, you must create a digital root function.
 * A digital root is the recursive sum of all the digits 
 * in a number. Given n, take the sum of the digits of n. 
 * If that value has two digits, continue reducing in this 
 * way until a single-digit number is produced. This is 
 * only applicable to the natural numbers.
*/

/* For example:
digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6
*/

let digital_root = n => {
  let result = n
  let recur = (n, sum=0) => {
    return n <= 9
      ? sum + n
      : recur((n - n % 10) / 10, sum + n % 10)
  }
  while(result > 10) result = recur(result)
  return result
}

console.log(digital_root(942)) // 6

