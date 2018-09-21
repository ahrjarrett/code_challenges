// Source : https://www.codewars.com/kata/where-my-anagrams-at/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-20

/*
 * Write a function that will find all the anagrams 
 * of a word from a list. You will be given two inputs a word 
 * and an array with words. You should return an array of all 
 * the anagrams or an empty array if there are none. For example:

 *     anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
 *     anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
 *     anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

 */

let sort = word =>
    word.split('')
    .slice()
    .sort()
    .join('')

let anagrams = (word, words) => {
  let sorted = sort(word)
  return words.filter(w => sort(w) === sorted ? true : false)
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))       // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'racer'])) // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))          // => []
