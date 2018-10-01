// Source : https://www.codewars.com/kata/are-they-the-same/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-10-01

let { isArray } = Array
let hd = arr => arr[0]
let tl = arr => arr.slice(1)

let comp = (a1, a2) => {
  if(!isArray(a1) || !isArray(a2)) return false

  let recurse = (a1, a2) => {
    if(!a1.length) return true
    let base = hd(a1)
    let idx = a2.indexOf(base * base)
    if(idx === -1) return false
    return recurse(tl(a1), a2.slice(0,idx).concat(a2.slice(idx+1)))
  }
  
  return recurse(a1, a2)
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2))   // => true
console.log(comp([], []))   // => true
console.log(comp([], null)) // => false

