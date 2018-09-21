// Source : https://www.codewars.com/kata/algebraic-data-types/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-21

let zero = () => {}
let succ = nat => () => nat

let natToInt = nat => nat === zero ? 0 : 1 + natToInt(nat())
let intToNat = int => int ? succ(intToNat(int - 1)) : zero
let toString = nat => nat === zero ? 'zero' : 'succ(' + toString(nat()) + ')'

let add = (n1, n2) =>
	n1 === zero ? n2
	: n2 === zero ? n1
        : add(n1(), succ(n2))

let mul = (n1, n2) => n1 === zero
	? zero
    : add(n2, mul(n1(), n2))

let compareTo = (n1, n2) => {
  if(n1 === zero && n2 === zero) return 0
  if(n1 === zero) return -1
  return n2 === zero ? 1 : compareTo(n1(), n2())
}

console.log('\n  compareTo:')
console.log(compareTo(zero, zero))                      // => 0
console.log(compareTo(zero, succ(zero)) < 0)            // => true
console.log(compareTo(succ(zero), zero) > 0)            // => true
console.log(compareTo(succ(zero), succ(zero)))          // => 0
console.log(compareTo(intToNat(10), intToNat(15)) < 0 ) // => true

console.log('\n  add:')
console.log(toString(add(zero, zero)))                     // => zero
console.log(toString(add(zero, succ(succ(zero)))))         // => succ(succ(zero))
console.log(toString(add(succ(zero), succ(succ(zero)))))   // => succ(succ(succ(zero)))
console.log(natToInt(add(intToNat(1001), intToNat(1201)))) // => 2202
console.log(natToInt(add(intToNat(7854), intToNat(3201)))) // => 11055

console.log('\n  multiply:')
console.log(toString(mul(zero, zero)))                         // => zero
console.log(toString(mul(zero, succ(zero))))                   // => zero
console.log(toString(mul(succ(zero), zero)))                   // => zero
console.log(toString(mul(succ(zero), succ(zero))))             // => succ(zero)
console.log(natToInt(mul(succ(succ(zero)), succ(succ(zero))))) // => 4
console.log(natToInt(mul(intToNat(6), intToNat(6))))           // => 36
console.log(natToInt(mul(succ(succ(zero)), succ(zero))))       // => 2
console.log(natToInt(mul(intToNat(42), intToNat(4))))          // => 168
console.log(natToInt(mul(intToNat(4), intToNat(42))))          // => 168
console.log(natToInt(mul(intToNat(500), intToNat(16))))          // => 168

console.log('\n  intToNat:')
console.log(toString(intToNat(0))) // => zero
console.log(toString(intToNat(2))) // => succ(succ(zero))

console.log('\n  natToInt:')
console.log(natToInt(zero))             // => 0
console.log(natToInt(succ(zero)))       // => 1
console.log(natToInt(succ(succ(zero)))) // => 2

console.log('\n  toString:')
console.log(toString(zero))             // => zero
console.log(toString(succ(succ(zero)))) // => succ(succ(zero))

console.log('\n  isomorphisms:')
console.log(natToInt(intToNat(10)))                         // => 10
console.log(toString(intToNat(natToInt(succ(succ(zero)))))) // => succ(succ(zero)))
