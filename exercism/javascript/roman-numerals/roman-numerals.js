const numerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}

module.exports = function toRoman(n) {
  let roman = ''

  Object.keys(numerals).forEach(numeral => {
    while(n >= numerals[numeral]) {
      roman += numeral
      n -= numerals[numeral]
    }
  })
  return roman
}

