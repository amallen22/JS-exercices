// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

var words = ['abracadabra', 'casa', 'yo']

function findLongestWords () {
  for (var i = 0; i < words.length; i++) {
    console.log(words[i].length)
  }
}
findLongestWords()

/// / Simon

var words = ['casa', 'abracadabra', 'yo', 'supercalifrajilespitafialidoso', 'oli']
var result = words[0].length
function findLongestWords () {
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > words[i - 1].length) {
      result = words[i].length
    }
  }
  return result
}
findLongestWords()

// Filter

function findLongestWords () {
  var words = ['casa', 'abracadabra', 'yo', 'supercalifrajilespitafia', 'oli']

  var biggerWord = words.reduce(function (a, b) {
    return a.length > b.length ? a : b
  })
  return biggerWord
}
findLongestWords()
