const Bob = function() {}

// isQuestion : String -> Boolean
const isQuestion = (str) =>
  str.slice(str.length - 1) === '?'

// isYelling : String -> Boolean
const isYelling = (str) =>
  str === str.toUpperCase() && str !== str.toLowerCase()

// isEmpty : String -> Boolean
const isEmpty = (str) => str.trim() === ''

Bob.prototype.hey = (greeting) => {
  if(isYelling(greeting)) return 'Whoa, chill out!'
  else if(isQuestion(greeting)) return 'Sure.'
  else if(isEmpty(greeting)) return 'Fine. Be that way!'
  else return 'Whatever.'
}


module.exports = Bob
