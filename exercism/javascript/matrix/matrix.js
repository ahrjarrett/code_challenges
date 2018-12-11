const parseColumns = rows => {
  return rows[0].map((_, i) => rows.map(row => row[i]))
}

class Matrix {
  constructor(m) {
    this.m = m
    this.rows = this.m.split('\n')
      .map(x =>
        x.split(' ')
          .map(Number)
      )
    this.columns = parseColumns(this.rows)
  }
}

module.exports = { Matrix }