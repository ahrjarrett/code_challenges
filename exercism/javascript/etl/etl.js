const ETL = function() {}

ETL.prototype.transform = (legacy) => {

  let transformed = {}

  Object.keys(legacy).forEach((key) => {
    legacy[key].forEach((value) => {
      transformed[value.toLowerCase()] = new Number(key)
    })
  })

  return transformed
}

module.exports = ETL
