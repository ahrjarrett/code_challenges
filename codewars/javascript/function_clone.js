// Source : https://www.codewars.com/kata/function-dot-prototype-dot-clone/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-21

Function.prototype.clone = function() {
	// We use apply to make clone work on arrow functions too:
  return new Function(`return ${this.toString()}`).apply(this)
}

let add = function(a,b) {return a + b}
let mul = (a,b) => a * b

let clonedAdd = add.clone()
let clonedMul = mul.clone()

console.log(clonedAdd(1,3)) // => 4
console.log(clonedMul(4,3)) // => 12

console.log(clonedAdd.name) // => 4
console.log(clonedMul.name) // => 12
