/*

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLir

bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp

!@#$%^&*()_+-
!@#$%^&*()_+-
!"#$%&'()*+

abcdefghijklmnopqrstuvwxyz
bhx,zWyLZ3pOGIhzeXTYtjAaDW

abcdefghijklmnopqrstuvwxyz.split('').map (a => device.encode(a)).join('')
bdfhjlnprtvxzBDFHJLNPRTVXZ

abcdefghijklmnopqrstuvwxyz.split('').map (a => device.encode('_'+a)[1]).join('')
dhlptxBFJNRVZ37,aeimquyCGK

abcdefghijklmnopqrstuvwxyz.split ('').map (a => device.encode ('__'+a)[2]).join('')
'hpxFNV3,emuCKS08bjrzHPX5 g'

*/

let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','.',',','UNKNOWN',' ', 'UNKNOWN']
// ?

let map = chars.reduce((acc, l, i) => {
  acc[l] = i + 1
  return acc
}, {})


let rMap = Object.keys(map).reduce((acc, k) => {
  // console.log(k)
  // console.log(map[k])
  acc[map[k]] = k
  return acc
}, {})




let getVal = c => map[c]
let getRVal = n => rMap[n]

let getCode = a => a === a.toUpperCase() ? getVal(a) + 64 : getVal(a) + 96

let encode = (c, acc=1) => {
  let val = getVal(c)
  let multiplier = Math.pow(2, acc)
  let code = (val * multiplier % 67)

  // console.log('\nc:', c)
  // console.log('acc:', acc)
  // console.log('val:', val)
  // console.log('multiplier:', multiplier)
  // console.log('code:', code)
  // console.log('code % 67:', code % 67)
  // console.log('getRVal:', getRVal(code))
  // console.log('multiplier % 67:', multiplier % 67)

  // offset might need to be based on acc
  let offset = code > 26 ? 38 : 96

  return getRVal(code)
}

device = {}
device.encode = str => {
  let acc = 1
  return str.split('').map(c => {
    return encode(c, acc++)
  }).join('')
}

  // let val = getVal(c)
  // let multiplier = Math.pow(2, acc)
  // let code = (val * multiplier % 67)


let decode = (c, acc) => {
  let val = getVal(c)
  let multiplier = Math.pow(1/2, acc)
  let code = (val * multiplier)


  
  console.log('\nchar:', c)
  console.log('val:', val)
  console.log('multiplier', multiplier)
  console.log('code', code)
  console.log('rVal', getRVal(code))

  return getRVal(code)
}

device.decode = str => {
  let acc = str.length
  return str.split('').map(c => {
    return decode(c, acc)
  }).join('')
}

// console.log(getVal('P')) // => w [45 -> 23] 
// console.log(getVal('Q')) // => w [45 -> 23] 
// console.log(getVal('R')) // => w [45 -> 23] 

// console.log(device.encode('G')) // => ' ' [33 -> 66] 
// console.log(device.encode('H')) // => a   [34 -> 1 ] 
// console.log(device.encode('O')) // => o   [41 -> 15] 
// console.log(device.encode('P')) // => q   [42 -> 17] 
// console.log(device.encode('Q')) // => s   [43 -> 19] 
// console.log(device.encode('R')) // => u   [44 -> 21] 
// console.log(device.encode('S')) // => w   [45 -> 23] 
// console.log(device.encode('T')) // => y   [46 -> 25]
// console.log(device.encode('U')) // => A   [47 -> 27]
// console.log(device.encode('V')) // => C   [48 -> 29]

console.log('target: 66', device.decode(' ')) // => G
console.log('target: 1', device.decode('H'))  // => a
console.log('target: 3', device.decode('I')) // => a
console.log('target: 15', device.decode('O')) // => o
// console.log(device.decode('b')) // => a
// console.log(device.decode('d')) // => b
// console.log(device.decode('bh')) // => ab
// console.log(device.decode('bhx,zWyLZ3pOGIhzeXTYtjAaDW'))

// console.log(device.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
                     // => 1SEk1Lc8En gFGdr3rW4FHhDuE
                     // => 1SEk1Lc8En gFGdr3rW4FHhDuE

// console.log(device.encode('e'))
// console.log(device.encode('abcdef'))
                     // => bhx,zW


// console.log('a'.charCodeAt(0)) // 97
// console.log('z'.charCodeAt(0)) // 122
// console.log('A'.charCodeAt(0)) // 65
// console.log('Z'.charCodeAt(0)) // 90

// console.log(encode('a')) // => b
// console.log(encode('b')) // => d
// console.log(encode('m')) // => z

// console.log('n'.charCodeAt(0))
// console.log('B'.charCodeAt(0)) // => 28 -> 66
// console.log('D'.charCodeAt(0)) // => 30 -> 68
// console.log(encode('n'))       // => B
// console.log(encode('o'))       // => D
// console.log(encode('o')) // => D


