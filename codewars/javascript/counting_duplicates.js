// Source : https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
// Author : Andrew Jarrett
// Date   : 2018-08-23

let duplicateCount = text => {
  let obj = text.split('').reduce((a,c) => {
    let x = c.toLowerCase()
    if(!a[x]) a[x] = 1
    else a[x] = a[x] + 1
    return a
  }, {})
  
  return Object.keys(obj).reduce((a,k) => {
    return obj[k] > 1 ? a + 1 : a
  }, 0)
}
