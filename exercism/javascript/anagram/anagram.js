/* 01-28/18
   
   For some reason this algorithm isn't working correctly. When we get to test 4 and console.log `this.permutations`, we're getting an incomplete list of all anagrams of "master". I believe we should be getting `6!` results, and instead we're getting ~20?

*/

class Anagram {
  constructor(value) {
    this.value = value
    this.permutations = getPermutations(this.value)
  }

  matches(arr) {
    let result = []
    arr.forEach(test => {
      if(this.permutations.includes(test))
	result.push(test)
    })
    console.log(this.permutations.toString())
    return result
  }
}

module.exports = Anagram

// Helper functions:
const getPermutations = (value, index = 0, buffer = []) => {
  if(typeof value === 'string') value = value.split('')
  // Base case:
  if (index >= value.length) return buffer

  for(let i = index; i < value.length; i++)
    buffer.push(swapLetters(value, index, i))

  return getPermutations(value, index + 1, buffer)
}

const swapLetters = (value, i, j) => {
  if (i !== j)
    [value[i], value[j]] = [value[j], value[i]]
  return value.join('')
}


