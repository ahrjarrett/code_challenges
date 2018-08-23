var Year = function(year) { this.year = year }

var isDivisibleByX = (x) => (input) => input % x === 0 ? true : false
var isDivisibleBy4 = isDivisibleByX(4)
var isDivisibleBy100 = isDivisibleByX(100)
var isDivisibleBy400 = isDivisibleByX(400)

Year.prototype.isLeap = function() {
  return (isDivisibleBy4(this.year) && !isDivisibleBy100(this.year) || isDivisibleBy400(this.year))
}

module.exports = Year
