// Source : https://www.hackerrank.com/challenges/simple-array-sum/problem
// Author : Andrew Jarrett
// Date   : 2018-09-25

'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin => {
  inputString += inputStdin
})

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(str => str.trim())

  console.log(inputString)
  main()
})

function readLine() {
  return inputString[currentLine++]
}

let simpleArraySum = arr => arr.reduce((acc, curr) => acc + curr, 0)

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const arCount = parseInt(readLine(), 10)

  const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10))

  let result = simpleArraySum(ar)

  ws.write(result + "\n")

  ws.end()
}
