// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function maxNum (n1, n2) {
  if (num1 === num2) {
    return num1
  } else if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

// way2
function max (num1, num2) {
  return Math.max(num1, num2)
}

// way3
function max (num1, num2) {
  return (num1 >= num2) ? num1 : num2
}
