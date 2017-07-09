// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

/*
   calculator("suma",10,5,2,3) // 20
   calculator("resta",10,5,1) // 4
   calculator("multiplicacion",10,5,2) // 100
   calculator("division",10,5) // 2
*/

function calculator() { // "suma", [3,4,2,4]

  var operation = arguments[0]
  var operators = []

  for ( var i=1; i<arguments.length; i++) {
    operators.push(arguments[i])
  }

  var operations = {
    suma : function ( operators ) {
      var result = 0
      for ( var i=0; i<operators.length; i++) {
        result += operators[i]
      }
      return result
    },
    resta : function ( operators ) {
      var result = operators[0]
      for ( var i=1; i<operators.length; i++) {
        result -= operators[i]
      }
      return result
    },
    multiplicacion : function ( operators ) {
      var result = 1
      for ( var i=0; i<operators.length; i++) {
        result *= operators[i]
      }
      return result
    },
    division : function ( operators ) {
      var result = operators[0]
      for ( var i=1; i<operators.length; i++) {
        result /= operators[i]
      }
      return result
    }
  }

  return operations[operation] ? operations[operation](operators) : -1;

}
