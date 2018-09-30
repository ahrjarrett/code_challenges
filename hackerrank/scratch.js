let sum = (a, b) => a + b

let intToStr = n => '' + n

// Complete the aVeryBigSum function below.
let aVeryBigSum= (arr) => {

  return arr.map(intToStr)
}

console.log(typeof intToStr(9000)) // => string
console.log(aVeryBigSum([9007199254740992, 1, 3, 1])) // 9007199254740997
