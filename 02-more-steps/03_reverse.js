// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

/* Way 1 */
function reverse( text ) {
  var aChars = text.split('')
  var reversedString = []
  aChars.forEach( function(char) {
    reversedString.unshift(char)
  })

  return reversedString.join('')
}

/* Way 2 */
function reverse( text ) {
  return text.split('').reverse().join('')
}