// Source : https://www.codewars.com/kata/5571d9fc11526780a000011a/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-10-02

/*
  
 * For this kata you will be using some meta-programming magic to create a new 
 * Thing object. This object will allow you to define things in a descriptive 
 * sentence like format.

 * This challenge attempts to build on itself in an increasingly complex manner.

 * Examples of what can be done with "Thing":
 
      const jane = new Thing('Jane')
      jane.name // => 'Jane'
      
      // can define boolean methods on an instance
      jane.is_a.person
      jane.is_a.woman
      jane.is_not_a.man
      
      jane.is_a_person // => true
      jane.is_a_man // => false
      
      // can define properties on a per instance level
      jane.is_the.parent_of.joe
      jane.parent_of // => 'joe'
      
      // can define number of child things
      // when more than 1, an array is created
      jane.has(2).legs
      jane.legs.length // => 2
      jane.legs[0] instanceof Thing // => true
      
      // can define single items
      jane.has(1).head
      
      jane.head instanceof Thing // => true
      
      // can define number of things in a chainable and natural format
      jane.has(2).arms.each(arm => having(1).hand.having(5).fingers )
      
      jane.arms[0].hand.fingers.length // => 5
      
      // can define properties on nested items
      jane.has(1).head.having(2).eyes.each( eye => being_the.color.blue.with(1).pupil.being_the.color.black )
      
      // can define methods
      jane.can.speak('spoke', phrase =>
        `${name} says: ${phrase}`)
      
      jane.speak("hello") // => "Jane says: hello"
      
      // if past tense was provided then method calls are tracked
      jane.spoke // => ["Jane says: hello"]

 */

let STATE = {
  NONE: 'NONE',
  SET_BOOL: 'SET_BOOL',
  HAS_PROP: 'HAS_PROP',
  FOR_EACH: 'FOR_EACH',
}

let singularize = plural => plural.replace(/s$/, '')

class Thing {
  constructor(name) {
    this.name = name
    this.__ = {
      state: STATE.NONE,
      value: null,
      prev_prop: null
    }
    return make_proxy(this)
  }
}

let make_proxy = instance => {
  return new Proxy(instance, {

    get: (target, prop, receiver) =>  {
      let { state, value, prev_prop } = target.__

      // console.log('\n')
      // console.log('ARGS :', target.__)
      // console.log('NEW PROP :', prop)

      if(state === STATE.SET_BOOL) {
	target[`${prev_prop}_${prop}`] = value
	reset_proxy(target, prop)
      }

      if(state === STATE.HAS_PROP) {
	target[prop] = value === 1
	  ? new Thing(singularize(prop))
	  : new Array(value).fill(new Thing(singularize(prop)))
	reset_proxy(target, prop)
      }

      if(state === STATE.FOR_EACH) {
	console.log('\n')
	console.log('###EACH ::')
	console.log('###TARGET : ', target)
	console.log('###STATE : ', state)
	console.log('###VALUE : ', value)
	console.log('###PROP : ', prop)
	console.log('###PREV PROP : ', prev_prop)

	// BORKEN
	target['each'] = (...args) => target.forEach(thing => value(...args))
	reset_proxy(target, prop)
      }

      if(prop === 'each') {
	return fn => {
	  target.__ = {
	    state: STATE.FOR_EACH,
	    value: fn,
	    prev_prop: 'each'
	  }

	  return receiver
	}
      }

      if(prop === 'has' || prop === 'having') {
	return number => {
	  target.__ = {
	    state: STATE.HAS_PROP,
	    value: number,
	    prev_prop: 'has'
	  }
	  return receiver
	}
      }

      if(prop === 'is_a' || prop === 'is_not_a') {
	target.__ = {
	  state: STATE.SET_BOOL,
	  value: prop === 'is_a' ? true : false,
	  prev_prop: 'is_a',
	}
	// calls fn again, passes in chain as new prop
	return receiver
      }

      // default case: return prop
      return target[prop]
    }
  })
}

let reset_proxy = (target, prev_prop) => {
  target.__ = {
    state: STATE.NONE,
    value: null,
    prev_prop,
  }
}

module.exports = Thing



