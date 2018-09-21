// Source : http://www.codewars.com/kata/dependency-injection/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-08-29

var deps = {
  'dep1': function () {return 'this is dep1'},
  'dep2': function () {return 'this is dep2'},
  'dep3': function () {return 'this is dep3'},
  'dep4': function () {return 'this is dep4'}
}

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency
}

DI.prototype.inject = function(fn) {
  if(!fn.length) return () => 0 // fn has no args? return 0
  let { dependency: dependencies } = this
  let getArgsRegex = /function\s?\(\s?(.+)\s?\)\s?{/
  let getArgs = fn => fn.toString().match(getArgsRegex)[1]
  let fns = getArgs(fn)
      .split(/,\s?/)
      .map(fn => dependencies[fn])

  return () => fn.apply(fn, fns)
}


var di = new DI(deps)
var di2 = new DI(deps)

var myFunc = di.inject(function(dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ')
})
var myOtherFunc = di2.inject(function() { return })


console.log(myFunc())      // => this is dep1 -> this is dep2 -> this is dep3
console.log(myOtherFunc()) // => 0
