var TwoFer = function () {}

TwoFer.prototype.twoFer = function (who) {
  const args = Array.prototype.slice.call(arguments)
  if (!args.length) return 'One for you, one for me.'
  return `One for ${who}, one for me.`
}

module.exports = TwoFer
