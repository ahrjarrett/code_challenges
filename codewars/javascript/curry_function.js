// Source : https://www.codewars.com/kata/curry-me-softly/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-2018

/*
 * Note that this implementation of curry only works with
 * variadic functions.

 * ^ Nope! I'm wrong; see `curriedReduce` below, which
 * needs to be bound at the time it is passed its 1st argument
 * (a reducer function), then an initial value. After that,
 * it simply returns the reduced value.
 */

let CurryIt = fn => {
	let curriedArgs = []
	let context = null

	return function curry(...args) {
		// If this is not global, native method might need access to it
		if (this != global) context = this

		if(args.length === 0) {
			let result = fn.call(context, ...curriedArgs)
			curriedArgs = []
			return result
		}

		args.forEach(arg => curriedArgs.push(arg))
		// Return curry if 1+ args so we keep a closure over curriedArgs
		return curry
	}
}

let testArray = [2,3,4]
let curriedReduce = CurryIt(Array.prototype.reduce)
// We need to bind the reduce fn at time of passing the reducer function:
curriedReduce.call(testArray, (a,b) => a + b)
curriedReduce(8)
curriedReduce(89)
// Ignores 89, already has all of its arguments
console.log(curriedReduce()) // => 17


let add = (...args) => {
	return args.reduce(function(a, c) { return a + c }, 0)
}

let curriedAdd = CurryIt(add)
curriedAdd(1)
curriedAdd(1,2,3)
curriedAdd(2)(2,5)(2)
console.log(curriedAdd()) // => 18

// make sure it clears on execution:
curriedAdd(1)
curriedAdd(1,2,3)
curriedAdd(2)(2,5)(2)
console.log(curriedAdd()) // => 18 (instead of 36)

var curryEval = CurryIt(eval)
curryEval("var y = function(){return 'evaluate this'}")
curryEval()
console.log(y()) // => evaluate this
