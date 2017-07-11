// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel (char) {
  switch (char) {
    case 'a':
      return true
      break

    case 'a':
      return true
      break

    case 'e':
      return true
      break

    case 'i':
      return true
      break

    case 'o':
      return true
      break

    case 'u':
      return true
      break

    default:
      return false
      break
  }
}

// way 2

function isVowel (char) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var comparison = vowels.indexOf(char)
  if (comparison == -1) {
    return false
  }
}
// way 3

function isVowel (char) {
  ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1
}
isVowel()

// way 4
function isVowel (char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char)
}

// way 5 (expresiones regulares)
function isVowel () {
  return /[aeiou]/.test(char)
}
