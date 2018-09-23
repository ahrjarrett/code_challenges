// Source : https://www.codewars.com/kata/concatenating-functions/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-23

/*
 * Functional programming thrives from the reuse of functions. 
 * One core feature to extend the reuse is the concatenation of functions.
 * You probably know this feature from your favorite shell: 
 *     ls -la | sort | head 
 * lists the top lines of the sorted result of ls -la

 * Build a function pipe to achieve this with JS. An example use could be:
 *    var addOne = function(e) {
 *        return e + 1
 *    }
 *    var square = function(e) {
 *        return e * e
 *    }
 *    var result = [1,2,3,4,5].map(addOne.pipe(square)) //-> [4,9,16,25,36]
 */

Function.prototype.pipe = function(f) {
  let g = this
  return x => f(g(x))
}

let addOne = e => e + 1
let square = e => e * e
let id = x => x
let str_of_int = s => '' + s
let exclaim = s => `${s}!`

let result = [1,2,3,4,5]
    .map(addOne
	 .pipe(square)
	 .pipe(x => x * 10)
	 .pipe(id)
	 .pipe(str_of_int)
	 .pipe(exclaim))    // -> ['40!','90!','160!','250!','360!']

console.log(result)



