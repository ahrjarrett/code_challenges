// Source : https://www.codewars.com/kata/regex-validate-pin-code/train/
// Author : Andrew Jarrett
// Date   : 2018-08-23

let validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin)
