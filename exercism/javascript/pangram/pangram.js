const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const pangram = function(str) {
  this.letters = str.toLowerCase()
    .match(/[a-z]/g)
}

pangram.prototype.isPangram = function () {
  if(!this.letters) return false

  const seen = this.letters.reduce((memo, letter) => {
    memo[letter] = true
    return memo
  }, {})

  return Object.keys(seen).length === alphabet.length
}

module.exports = pangram

