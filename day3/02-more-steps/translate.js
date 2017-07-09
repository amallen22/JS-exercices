// https://github.com/juanmaguitar/exercises-javascript/tree/master/02-more-steps

// Write a function translate() that will translate a text into 'rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function isVowel (char) {
  ['a', 'e', 'i', 'o', 'u', ' '].indexOf(char) !== -1
}
// indexOf > devuelve la posicion del elemento sino devuelve -1

function translate (text) {
  // var newLength = fruits.unshift('Strawberry') // add to the front
  var currentChar
  var translatedText = ''

  for (var i = 0; i < text.length; i++) {
    currentChar = text[i]

    if (isVowel(currentChar)) {
      translatedText += currentChar
    } else {
      translatedText += currentChar + 'o' + currentChar
    }
  }
  return translatedText
}
translate('this is fun')

// Humberto

function Translate (str) {
  var arr = str.split('')
  for (var i = 0; i < str.length; i++) {
    if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', ' '].includes(arr[i]) === false) {
      arr[i] = arr[i] + 'o' + arr[i]
    }
  }
  str = arr.join('')
  return str
}
Translate('Me salio Awesome')
