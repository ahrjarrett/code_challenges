// Source : https://www.codewars.com/kata/objectify-a-url-query-string/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30

/*

 * In this kata, we want to convert a URL query string 
 * into a nested object. The query string will contain 
 * parameters that may or may not have embedded dots ('.'), 
 * and these dots will be used to break up the properties 
 * into the nested object.

 * You will receive a string input that looks something like this:

       user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
 
 * Your method should return an object hash-map that looks like this:

       {
         'user': {
           'name': {
             'firstname': 'Bob',
             'lastname': 'Smith'
           },
           'favoritecolor': 'Light Blue'
         }
       }

 */


let makeObject = (keys, val, obj={}) => {
  let position = ''
  let value = decodeURI(val)
  if(keys.length === 1) {
    obj[keys[0]] = val
    return obj
  }

  return keys.reduce((acc, curr, i) => {
    if(i === keys.length - 1) {
      position += `["${curr}"]`
      eval(`${position} = "${value}"`)
    }
    else if(i === 0) {
      acc[curr] = acc[curr] || {}
      position = `acc["${curr}"]`
    }
    else {
      position += `["${curr}"]`
      eval(`${position} = ${position} || {}`)
    }
    return acc
  }, obj)
}

let convertQueryToMap = query => {
  if(query === '') return ''
  let vals = []
  let queries = query.split('&').map(q => {
    let [ query, val ] = q.split('=')
    vals.push(decodeURIComponent(val))
    return query
  })

  return queries.reduce((acc, curr, i) => {
    let keys = curr.split('.')
    let val = vals[i]
    return makeObject(keys, val, acc)
  }, {})
}


let q1 = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
let q2 = 'user.1.name=Alice&user.2.name=Bob&user.3.name=Charles&user.4.name=Debbie'
let q3 = 'a=1&b=2'

console.log(convertQueryToMap('')) // => ''
console.log(convertQueryToMap(q1)) // => {user:{name:{firstname:'Bob',lastname:'Smith'},favoritecolor:'LightBlue'}}
console.log(convertQueryToMap(q2)) // => {user:{'1':{name:'Alice'},'2':{name:'Bob'},'3':{name:'Charles'},'4':{name:'Debbie'}}}
console.log(convertQueryToMap(q3)) // => {a:'1',b:'2'}

