// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function multipleNumb (a) {
  var res = ''

  for (var i = 1; i < (500 / a); i++) {
    res += a * i + '\t'
  }
  console.log(res)
}

multipleNumb(23)

// v.juanmaguitar

function multiples () {
  var sum = 0
  var result = ''

  for (var i = 23; i <= 500; i += 23) {
    result += i + '\t'
    sum += i
  }
  console.log('elements: ' + result)
  console.log('Sum: ' + sum)
}

multiples()

/* Way 2 */

function multiples () {
  var sum = 0
  var elements = ''
  for (var i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      sum += i
      elements += i + '\t'
    }
  }
  console.log('Elements : ' + elemets)
  console.log('Sum : ' + total_sum)
}
