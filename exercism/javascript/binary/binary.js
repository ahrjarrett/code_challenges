// All cases pass, except for invalid inputs.
// Add validation! 04/04/17

function Binary(b) {
  this.binary = b
}

Binary.prototype.toDecimal = function () {
  var binary = this.binary

  var decimal = binary.split('')
    .map((integer, idx) => {
      var powerOf = binary.length - idx - 1
      return (Number(integer) * Math.pow(2, powerOf))
    })

  return decimal.reduce((acc, curr) => acc + curr, 0)
}

console.log(new Binary('101').toDecimal()) // => 5
module.exports = Binary
