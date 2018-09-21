// Source : http://www.codewars.com/kata/range-extraction/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-20

/* 
 * A format for expressing an ordered list of integers is to use a comma separated list of either:

 * 1. individual integers
 * 2. a range of integers denoted by the starting integer separated 
 *    from the end integer in the range by a dash, '-'. The range 
 *    includes all integers in the interval including both endpoints. 
 *    It is not considered a range unless it spans at least 3 numbers. 
 *    For example ("12, 13, 15-17")

 * Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
 */

let getConsecutive = (curr, nextArr) => {
  let result = []
  let current = curr
  while(nextArr.length && curr + 1 === nextArr[0]) {
    result.push(nextArr.shift())
    curr += 1
  }
  return result
}

let solution = list => {
  let result = []
  let i = 0
  let range,
      consecutives,
      end,
      start

  while(list.length) {
    consecutives = getConsecutive(list[i], list.slice(i+1))
    range = consecutives.length

    if(!range) {
      result.push(list.shift())
    }

    if(range < 2) {
      while(range) {
    	result.push(list.shift())
    	range--
      }
    }

    else {
      end = list[i] + range
      start = list.shift()
      result.push(`${start}-${end}`)
      while(range) {
	list.shift()
	range--
      }
      i += range
    }
  }

  return result.join(',')
}


console.log(getConsecutive(-4, [-3,-2,-1, 5]))
// => [ -3, -2, -1 ]
console.log(solution([1,3,4,5,7,9]))
// => "1,3-5,7,9"
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
// => "-6,-3-1,3-5,7-11,14,15,17-20"

