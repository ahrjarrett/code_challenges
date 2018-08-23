module.exports = function() {
  let db = {}

  this.roster = () => db

  this.add = (name, grade) => {
    if(db[grade]) {
      db[grade].push(name)
      db[grade].sort()
    } else {
      db[grade] = [name]
    }
  }

  this.grade = (grade) => {
    return db[grade] || []
  }
}

