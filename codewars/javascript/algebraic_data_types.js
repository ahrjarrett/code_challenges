function tco(f) {
  var value
  var active = false
  var accumulated = []

  return function accumulator() {
	accumulated.push(arguments)

    if (!active) {
	  active = true

      while (accumulated.length) {
        value = f.apply(this, accumulated.shift())
      }

      active = false

      return value
    }
  }
}


function zero(){}
let succ = nat => () => nat

let isZero = nat => !nat()

let toString = nat => {
  if(isZero(nat)) return 'zero'
  return `succ(${toString(nat())})`
}

let intToNat = int => {
  if(int === 0) return zero
  return succ(intToNat(int - 1))
}


let natToInt = nat => {
  let recurse = (nat, sum=0) =>
  	  isZero(nat) ? sum
  	  : recurse(nat(), sum+1)
  return recurse(nat)
}

let add = tco((nat1, nat2) => {
  return nat1() ? add(nat1(), succ(nat2)) : nat2
})

let mul = tco((nat1, nat2, multiplier=nat1) => {
  if(isZero(nat1) || isZero(nat2)) return zero
  if(isZero(nat2())) return nat1
  return mul(add(multiplier, nat1), nat2(), multiplier)
})

let compareTo = (nat1, nat2) => {
  if(natToInt(nat1) > natToInt(nat2)) return 1
  if(natToInt(nat1) < natToInt(nat2)) return -1
  return 0
}

// console.log(natToInt(add(intToNat(5754), intToNat(3201))))




// console.log('\n  compareTo:')
// console.log(compareTo(zero, zero))                      // => 0
// console.log(compareTo(zero, succ(zero)) < 0)            // => true
// console.log(compareTo(succ(zero), zero) > 0)            // => true
// console.log(compareTo(succ(zero), succ(zero)))          // => 0
// console.log(compareTo(intToNat(10), intToNat(15)) < 0 ) // => true

// console.log('\n  add:')
// console.log(toString(add(zero, zero)))                     // => zero
// console.log(toString(add(zero, succ(succ(zero)))))         // => succ(succ(zero))
// console.log(toString(add(succ(zero), succ(succ(zero)))))   // => succ(succ(succ(zero)))
// console.log(natToInt(add(intToNat(1001), intToNat(1201)))) // => 2202

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

// console.log('\n  intToNat:')
// console.log(toString(intToNat(0))) // => zero
// console.log(toString(intToNat(2))) // => succ(succ(zero))

// console.log('\n  natToInt:')
// console.log(natToInt(zero))             // => 0
// console.log(natToInt(succ(zero)))       // => 1
// console.log(natToInt(succ(succ(zero)))) // => 2

// console.log('\n  toString:')
// console.log(toString(zero))             // => zero
// console.log(toString(succ(succ(zero)))) // => succ(succ(zero))

// console.log('\n  isomorphisms:')
// console.log(natToInt(intToNat(10)))                         // => 10
// console.log(toString(intToNat(natToInt(succ(succ(zero)))))) // => succ(succ(zero)))
