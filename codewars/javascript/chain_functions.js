// Source : https://www.codewars.com/kata/born-to-be-chained/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-21

let chain = fns => new ChainFunctions(fns)

class ChainFunctions {
  constructor(fns) {
    this.result = []

    Object.keys(fns).forEach(
      fn => this[fn] = (...args) => {
	this.result.push([fns[fn],(args)])
	return this
      }
    )

  }

  execute() {
    if(this.result.length === 0) return

    let [fn, args] = this.result.shift()
    let result = fn.apply(this, args)

    while(this.result.length) {
      console.log('in while loop')
      console.log('result:', result)

      let [fn, args] = this.result.shift()
      console.log('new fn:', fn)
      console.log('new args:', args)

      result = fn.apply(this, [result, ...args])
    }

    console.log('this.result after execute', this.result)
    return result
  }
}

let c = chain({sum:(x,y)=>x+y,minus:(x,y)=>x-y,double:x=>x+x,addOne:x=>x+1})

// console.log(c.sum(3, 4).execute()) //7
// console.log(c.sum(1, 2).execute()) //3

// console.log(c.sum(1, 2).sum(100).addOne().double().minus(400).execute())

c1 = c.sum(4,5)
c2 = c1.sum(5)
console.log(c1.execute())

c1 = c.sum(4,5)
c2 = c1.sum(5)
console.log(c2.addOne().execute())

// console.log(c.execute())

// console.log(c.sum(1,3).double().minus(10).execute())


