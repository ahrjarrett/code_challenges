const Words = function () {}

const tally = (tally, vote) => {
  if (!tally[vote]) {
    tally[vote] = 1
  } else {
    tally[vote] = tally[vote] + 1
  }
  return tally
}

Words.prototype.count = (str) =>
  str.replace(/[!@#$%%^&*\(\):;\\?.¡¿]/g, '')
    .toLowerCase()
    .split(/\s+|,/g)
    .reduce(tally, {})


module.exports = Words
