function sum( aNumbers ) {

  return aNumbers.reduce( function(sum, item) {
    return sum + item
  }, 0)

}

function multiply( aNumbers ) {

  return aNumbers.reduce( function(multiplication, item) {
    return multiplication * item
  }, 1)

}

// var sName
// var nAge
// var aNumbers
// var oData
// var fnSum