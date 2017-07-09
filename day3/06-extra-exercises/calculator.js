// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters

function calculator (operator, a, b) {
  if (operator === 'suma') return a + b
  if (operator === 'resta') return a - b
  if (operator === 'multiplicacion') return a * b
  if (operator === 'division') return a / b
}

calculator('suma', 10, 5)
calculator('resta', 10, 5)
calculator('multiplicacion', 10, 5)
calculator('division', 10, 5)
