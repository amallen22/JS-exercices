// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function multNumb (a) {
  var res = ''
  for (var i = 1; i <= 10; i++) {
    res += a * i + '\t'
  }
  console.log(res)
}
multNumb(5)

// v.juanmaguitar

function multNumb (a) {
  for (var i = 1; i <= 10; i++) {
    console.log(i * a)
  }
}
multNumb(5)
