// Source : http://www.codewars.com/kata/dependency-injection/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-08-29

var deps = {
  'dep1': function () {return 'this is dep1';},
  'dep2': function () {return 'this is dep2';},
  'dep3': function () {return 'this is dep3';},
  'dep4': function () {return 'this is dep4';}
}

/**
 * Constructor DependencyInjector
 * @param {Object} - Object with keys of dependency names 
 *                   and the functions they map to as values
 */
var DI = function (dependencies) {
  this.dependencies = dependencies
}

/**  TODO: Extend this regex to work with arrow functions?    **
 **        How could I check which type of fn is passed?      **
 **        Also note that this regex does not take into       **
 **        account certain ES6 properties like destructuring  **/

DI.prototype.inject = function(fn) {
  let { dependencies } = this
  let getArgsRegex = /function\s?\(\s?(.+)\s?\)\s?{/
  let getArgs = fn => fn.toString().match(getArgsRegex)[1]
  let fns = getArgs(fn)
      .split(/,\s?/)
      .map(fn => dependencies[fn])

  return () => fn.apply(fn, fns)
}
  
var di = new DI(deps)

var myFunc = di.inject(function(dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ')
})

console.log(
  myFunc() // 'this is dep1 -> this is dep2 -> this is dep3'
)

