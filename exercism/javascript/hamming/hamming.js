function Hamming () {}

Hamming.prototype.compute = (strandA, strandB) => {
  let counter = 0

  const arrayA = strandA.split('')
  const arrayB = strandB.split('')

  if(arrayA.length !== arrayB.length) {
    throw new Error('DNA strands must be of equal length.')
  }

  for(let i = 0; i < arrayA.length; i++) {
    if(arrayA[i] !== arrayB[i]) counter++
  }

  return counter
}

module.exports = Hamming
