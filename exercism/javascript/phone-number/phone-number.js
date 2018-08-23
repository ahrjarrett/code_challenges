const PhoneNumber = function(num) {
  this.num = num
  this.area = num.slice(0, 3)
  this.local = num.slice(3, 6) + '-' + num.slice(6)
}

// cleanInput : String -> String
const cleanInput = (str) => str.replace(/[\s()-.]/g, '')

// checkHead : String -> String
const checkHead = (str) => {
  if(str.length === 11) {
    return (str.slice(0, 1) === '1' ? str.slice(1) : str)
  } else {
    return str
  }
}

const checkLength = (str) => {
  return str.length === 10 ? str : '0000000000'
}

// getAreaCode : String -> String
const getAreaCode = (str) => str.slice(0, 3)

const wrapAreaCode = (str) => {
  const areaCode = getAreaCode(str)
  return (`(${areaCode}) `)
}


PhoneNumber.prototype.number = function() {
  return checkLength(checkHead(cleanInput(this.num)))
}

PhoneNumber.prototype.areaCode = function() {
  return getAreaCode(this.num)
}

PhoneNumber.prototype.toString = function() {
  return wrapAreaCode(this.area) + this.local
}

module.exports = PhoneNumber
