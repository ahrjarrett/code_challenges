// Source : https://www.codewars.com/kata/consecutive-strings/train/
// Author : Andrew Jarrett
// Date   : 2018-08-23

let longestConsec = (arr, k) => {
  let sequences = [],
      n = arr.length,
      curr

  if(n === 0 || k > n || k <= 0) return ''
  
  arr.forEach((str, i) => {
    curr = []
    if(i+k-1 >= n) return
    for(let j=i; j <= i+k-1; j++) {
      curr.push(arr[j])
    }
    sequences.push(curr)
  })

  return sequences
    .map(s => s.join(''))
    .reduce((a, c) => a.length >= c.length ? a : c)
}


console.log(longestConsec(["zone", "abigail", "theta", "form", "libliblibliblibe", "la"], 3))
console.log(longestConsec([], 3))
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))
console.log(longestConsec(["zzzzzzzzzzzzzzzzz","it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0))

