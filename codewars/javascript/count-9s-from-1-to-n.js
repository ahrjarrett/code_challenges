// Author : Andrew Jarrett
// Source : https://www.codewars.com/kata/count-9-s-from-1-to-n/train/javascript
// Date   : 2018-12-11

// return the number of 9's used to count out 1 to n

function count9s(n) {
	let count = 0
	let str = n + ''
	for(let i = 0; i < str.length; i++) {
		if(str[i] === '9') count ++
    }
	return count
}

function number9(n) {
  let nines = 0
  while(n >= 8) {
    nines = nines + count9s(n)
    n--
  }
  return nines
}


/*** RECURSIVE SOLUTION (TOO MANY FRAMES, MAKE TAIL-RECURSIVE ***/

// function count9s(n) {
//   function recurse(n, count = 0) {
//     if(n === 0) return count
//     let last = n % 10
//     return recurse((n - last) / 10, last === 9 ? count + 1 : count)
//   }
//   return recurse(n)
// }

// function number9(n) {
//   console.log('INPUT:', n)
//   function recurse(n, acc = 0) {
//     if(n <= 8) return acc    
//     return recurse(n - 1, acc + count9s(n))
//   }
//   return recurse(n)
// }
