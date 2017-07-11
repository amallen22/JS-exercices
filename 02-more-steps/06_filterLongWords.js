// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords () {
  ['barbacoa', 'jardin', 'sol', 'allioli'].filter(function (words) {
    return words.length > 4
  })
}
filterLongWords()

// way 2

function filterLongWords () {
  var weekend = ['barbacoa', 'jardin', 'sol', 'allioli', 'vermut']
  var result = weekend.filter(function (words) {
    return words.length >= 4
  })
  return result
}
filterLongWords()
