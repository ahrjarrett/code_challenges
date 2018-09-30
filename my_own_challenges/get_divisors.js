// Description: Created while I was working on Hamming numbers.
// Author: Andrew Jarrett
// Date: 2018-09-25

// get_divisors :: int -> int array
let get_divisors = n => {
  if(n === 0) return [0]
  if(n < 0) return get_divisors(-n)

  let recurse = (d, result=[]) => {
    if(d === 1) return result
    if(n % d) return recurse(d-1, result)
    return recurse(d-1, result.concat(d))
  }
  return recurse(Math.ceil(n/2))
}

console.log(get_divisors(9)) // => [ 3 ]
console.log(get_divisors(-10)) // => [ 5, 2 ]
console.log(get_divisors(60)) // => [ 30, 20, 15, 12, 10, 6, 5, 4, 3, 2 ]
console.log(get_divisors(8778)) // => [ 5, 2 ]
// => [4389,2926,1463,1254,798,627,462,418,399,266,231,209,154,133,114,77,66,57,42,38,33,22,21,19,14,11,7,6,3,2]
