
class RingBuffer {
  constructor(capacity) {
    this.storage = new Array(capacity)
    this.count = 0
    this.append = this.append.bind(this)
    this.allValues = this.allValues.bind(this)
  }

  append(x) {
    this.storage[this.count++ % this.storage.length] = x
  }

  allValues() {
    console.log("allValues:", this.storage)
    return this.storage
  }
}

console.log("running")

const buffer = new RingBuffer(3)

buffer.append('a')
buffer.append('b')
buffer.append('c')
buffer.allValues()
// => ['a', 'b', 'c']

buffer.append('d')
buffer.allValues()
// => ['d', 'b', 'c']

buffer.append('e')
buffer.append('f')
buffer.allValues()
// => ['d', 'e', 'f']
