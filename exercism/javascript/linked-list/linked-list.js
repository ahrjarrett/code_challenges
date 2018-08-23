// See comment in UNSHIFT for question about circularity

function LinkedList() {
  this.head = null
  this.tail = null
  this.count = 0
}

function Node(value, prev) {
  this.value = value
  this.next = null
  this.prev = prev
}

LinkedList.prototype.push = function(value) {
  var nextNode = new Node(value, this.tail)
  this.count = this.count + 1

  if(!this.head) {
    this.head = nextNode
    this.tail = nextNode
    return
  }

  this.tail.next = nextNode
  nextNode.prev = this.tail
  this.tail = nextNode

  return this.count
}

LinkedList.prototype.pop = function() {
  var popped = this.tail
  this.tail = this.tail.prev
  this.count = this.count - 1
  return popped.value
}

LinkedList.prototype.forEach = function(callback) {
  var node = this.head
  while(node) {
    callback(node.value)
    node = node.next
  }
}

LinkedList.prototype.print = function() {
  var result = []
  this.forEach(function(value) {
    result.push(value)
  })
  return result.join(', ')
}

LinkedList.prototype.shift = function() {
  var shifted = this.head
  this.head = this.head.next
  this.count = this.count - 1
  return shifted.value
}

LinkedList.prototype.unshift = function(value) {
  // does 2nd arg (null) need to be changed to this.tail? will that make it circular? is that the desired effect?
  var newHead = new Node(value, null)
  this.count = this.count + 1

  if(!this.head) {
    this.head = newHead
    this.tail = newHead
    return
  }

  this.head.prev = newHead
  newHead.next = this.head
  this.head = newHead

  return this.count
}

var list = new LinkedList()

module.exports = LinkedList


