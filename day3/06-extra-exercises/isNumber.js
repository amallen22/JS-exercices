// Define a function called ​isNumber​ that receives a value and return true if the value received is a number

function isNumber (num1) {
  if (num1 !== NaN) {
    return true
  } else {
    return false
  }
}
isNumber(1)

function isNumber (num1) {
  return typeof num1 !== NaN
}
isNumber(1)

function isNumber (num1) {
  var typeNum = typeof num1
  if (typeNum === isNaN) {
    return false
  }
}
isNumber(1)

// parseInt si no es numero devolverá NaN
