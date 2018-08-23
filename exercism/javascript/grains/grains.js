const bigInt = require('./big-integer')

function Grains() {
  const totalSquares = 64

  this.square = (num) => {
    return bigInt(2)
      .pow(num - 1)
      .toString()
  }

  this.total = allGrains = () => {
    return bigInt(2).pow(totalSquares).prev().toString()
  }

}

module.exports = Grains
