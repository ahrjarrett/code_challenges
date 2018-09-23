let { floor } = Math
let wrap = (n) => infix => infix ? infix.call(infix, n) : n

let zero =  (infix) => wrap(0)(infix)
let one =   (infix) => wrap(1)(infix)
let two =   (infix) => wrap(2)(infix)
let three = (infix) => wrap(3)(infix)
let four =  (infix) => wrap(4)(infix)
let five =  (infix) => wrap(5)(infix)
let six =   (infix) => wrap(6)(infix)
let seven = (infix) => wrap(7)(infix)
let eight = (infix) => wrap(8)(infix)
let nine =  (infix) => wrap(9)(infix)

let plus = x => y => y + x
let minus = x => y => y - x
let times = x => y => y * x
let dividedBy = x => y => floor(y / x)

console.log(four(dividedBy(seven())))      // => 0
console.log(seven(times(five())))         // => 35
console.log(four(plus(nine())))           // => 13
console.log(eight(minus(three())))        // => 5
console.log(seven(dividedBy(two())))      // => 4
console.log(four(dividedBy(nine())))      // => 0
console.log(four())
