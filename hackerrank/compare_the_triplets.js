// Source : https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen
// Author : Andrew Jarrett
// Date   : 2018-09-25


'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin
})

process.stdin.on('end', function() {
  inputString = inputString.split('\n')

  main()
})

function readLine() {
  return inputString[currentLine++]
}

// Complete the compareTriplets function below.
let zip = (arr1, arr2, f) => {
  let result = []
  for(let i = 0; i < arr1.length; i++) {
    result.push(f(arr1[i], arr2[i]))
  }
  return result
}

let compareTriplets = (a, b) => {
  let result = [0,0]
  zip(a, b, ((a, b) => {
    if(a > b) result[0]++
    if(b > a) result[1]++

  }))
  return result
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10))

  const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10))

  const result = compareTriplets(a, b)

  ws.write(result.join(' ') + '\n')

  ws.end()
}
