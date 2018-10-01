// Source : https://www.codewars.com/kata/hidden-cubic-numbers/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30

let { floor, pow } = Math

let add = (acc, curr) => acc + curr
let id = x => x
let hd = x => x[0]
let tap = x => { console.log(x); return x }

let isSumOfCubes = x => {
  let ns = parseStr(x)
  let strArr = ns
    .map(n => isCubic(parseInt(n)))
    .filter(n => n[0])
    .map(n => n[1])

  return !strArr.length
    ? 'Unlucky'
    : strArr.join(' ') + ' ' + strArr.reduce(add, 0) + ' Lucky'
}

let parseStr = s => s
    .match(/\d+/g)
    .reduce((acc, curr) => {
      let slice
      while(curr.length > 3) {
	slice = curr.slice(0, 3)
	curr = curr.slice(3)
	acc.push(slice)
      }
      return curr ? acc.concat(curr) : acc
    }, [])


// isCubic :: Int -> Array[Bool, Int]
let isCubic = n => {
  let m = n
  let result = 0
  let rem
  while(m) {
    rem = m % 10

    result = result + pow(rem, 3)
    m = floor(m / 10)
  }

  return [result === n, result]
}

console.log(isSumOfCubes("aqdf& 0 1 xyz 153 777.777")) // => 0 1 153 154 Lucky
console.log(isSumOfCubes("...42a time1abc412abc371451?/!447xyz370377")) // => 1 371 370 742 Lucky
console.log(isSumOfCubes("9026315 -827&()")) // => Unlucky


