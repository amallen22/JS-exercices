// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

function calculator () {
  if (arguments[0] === 'suma') {
    result = arguments[1]
    for (i = 2; i < arguments.length; i++) {
      result += arguments[i]
    }
    return result
  }
  if (arguments[0] === 'resta') {
    result = arguments[1]
    for (i = 2; i < arguments.length; i++) {
      result -= arguments[i]
    }
    return result
  }
  if (arguments[0] === 'multiplicacion') {
    result = arguments[1]
    for (i = 2; i < arguments.length; i++) {
      result *= arguments[i]
    }
    return result
  }
  if (arguments[0] === 'division') {
    result = arguments[1]
    for (i = 2; i < arguments.length; i++) {
      result /= arguments[i]
    }
    return result
  }
}

calculator('multiplicacion', 10, 5, 2)
calculator('resta', 10, 5, 2)
calculator('multiplicacion', 10, 5, 2)
calculator('division', 10, 5, 2)
