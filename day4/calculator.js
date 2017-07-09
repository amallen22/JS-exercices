// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters

/*
calculator("suma",10,5) // 15
calculator("resta",10,5) // 5
calculator("multiplicacion",10,5) // 50
calculator("division",10,5) // 2
*/

/* Way 1 */
function calculator( operation, num1, num2 ) {

  if (operation === "suma") return num1 + num2
  if (operation === "resta") return num1 - num2
  if (operation === "multiplicacion") return num1 * num2
  if (operation === "division") return num1 / num2

}

/* Way 2 */
function calculator( operation, num1, num2 ) {

  var operations = {
    suma : function ( num1, num2 ) {
      return num1 + num2
    },
    resta: function( num1, num2 ) {
      return num1 - num2
    },
    multiplicacion: function( num1, num2 ) {
      return num1 * num2
    },
    division: function( num1, num2 ) {
      return num1 / num2
    }
  }

  return operations[operation] ? operations[operation](num1, num2) : -1;

}