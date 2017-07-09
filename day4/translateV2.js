// https://github.com/juanmaguitar/exercises-javascript/tree/master/02-more-steps

// Write a function translate() that will translate a text into 'rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

// usando expresiones regulares

function isConsonant () {
  return /[b-df-hj-np-tv-z]/.test(char)
}
function translate (text) {
  return text.replace(/[b-df-hj-np-tv-z]/g, '$&o$&')
}
translate('this is fun')
