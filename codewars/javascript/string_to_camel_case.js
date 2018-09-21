// Source : https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-20

/* Instructions:
 * Complete the method/function so that it converts 
 * dash/underscore delimited words into camel casing.
 * The first word within the output should be 
 * capitalized only if the original word was capitalized.
*/

let head = A => A[0]
let tail = A => A.slice(1)

let toCamelCase = str => {
  if(!str) return ''
  let words = tail(str).split(/[-_]/)
  return head(str) + head(words) + tail(
    words.map(w => !w ? '' : head(w).toUpperCase() + tail(w))
  ).join('')
}


console.log(toCamelCase("the-stealth-warrior")) // => "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")) // => "TheStealthWarrior"
console.log(toCamelCase("TheStealthWarrior"))   // => "TheStealthWarrior"
console.log(toCamelCase("A-B-C"))               // => "ABC"
console.log(toCamelCase(""))                    // => ""
