// Source : https://www.codewars.com/kata/calculator/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30

// eval :: String -> Int
let evaluate = str => {
  let exps = str.split(' ')
  let op = exps[1]
  let n1 = new Number(exps[0])
  let n2 = new Number(exps[2])
  switch(op) {
    case undefined: return new Number(n1)
    case '/': return n1 / n2
    case '*': return n1 * n2
    case '+': return n1 + n2
    case '-': return n1 - n2
  }
}

// makeSubExp :: Array, Integer -> String
let makeSubExp = (exps, i) => `${exps[i-1]} ${exps[i]} ${exps[i+1]}`


let Calculator = function() {
  this.evaluate = str => {
    let exps = str.split(' ')
    let result
    let i = 0
    let j = 1

    while(i < exps.length) {

      if(exps[i] === '/' || exps[i] === '*') {
	let subExp = makeSubExp(exps, i)

	// coerce subexpression to string
	exps.splice(i-1, 3, evaluate(subExp) + '')
	i = 0
      }
      i++
    }

    while(j < exps.length) {
      if(exps.length === 1) {
	exps = evaluate(makeSubExp(exps[0]))
	return
      }
      let subExp = makeSubExp(exps, j)
      exps.splice(j-1, 3, evaluate(subExp) + '')
      j = 1
    }

    return exps[0]
  }
}

let calculate = new Calculator()

console.log(calculate.evaluate('127'))              // => 127
console.log(calculate.evaluate('2 + 3'))            // => 5
console.log(calculate.evaluate('2 - 3 - 4'))        // => -5
console.log(calculate.evaluate('10 * 5 / 2'))       // => 25
console.log(calculate.evaluate('10 - 4 / 2'))       // => 8
console.log(calculate.evaluate('77 / 16 + 64 * 8')) // => 516.8125

