// Source : https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-08-23
// TODO   : Clean up the for loop in `orderWeight`


// Helpers:
let { floor } = Math
let splitOnWhitespace = s => s.split(/\s+/)

let sumOfDigits = (str, sum=0) => {
  if(!str) return sum
  return sumOfDigits(floor(str / 10), sum + str % 10)
}

let mapify = str => splitOnWhitespace(str).reduce((a,c) => {
  a[c] = sumOfDigits(c)
  return a
}, {})

// Solution:
let orderWeight = str => {
  let map = mapify(str)
  let sorted = splitOnWhitespace(str).sort(
    (a, b) => {
      if(map[a] === map[b]) {
	sortByA = false
	sortByB = false

	for(let i = 0; i < a.length || i < b.length; i++) {
	  if(!a[i]) return -1
	  if(!b[i]) return 1
	  if(a[i].charCodeAt() > b[i].charCodeAt()) return 1
	  if(a[i].charCodeAt() < b[i].charCodeAt()) return -1
	}

      }
      return map[a] - map[b]
    }
  )

  return sorted.join(' ')
}


console.log(orderWeight("103 123 4444 99 2000"))
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))





console.log('\n')
console.log('\n')
console.log(orderWeight("18 27 72 81 9 91 425 31064 1 2 200 4 4 6 6 7 7 7920 67407 96488 34608557 71899703"))
console.log('\n')

console.log(orderWeight("71899703 34608557 96488 67407 31064 7920 425 200 91 81 72 27 18 9 7 7 6 6 4 4 2 1"))
console.log('\n')

// The 2 above SHOULD return this:
console.log("1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703")

