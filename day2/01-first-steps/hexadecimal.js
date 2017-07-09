// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

function getRgb (hex) {
  // var a = getRGB ('#00FF00');
  // var a = "rgb(255,255,255)".split("(")[1].split(")")[0];

  var result = hex.split('#')
    // split convertimos string en un array
  console.log(result)
}
getRgb('#00FF00')

// juanmaguitar

function getRgb (colorHex) {
  var redHex = colorHex[1] + colorHex[2] // 00
  var greenHex = colorHex[3] + colorHex[4] // FF
  var blueHex = colorHex[5] + colorHex[6] // 00

  // Podemos acceder a la posición de un string como si fuese un array[1]

  var redDec = parseInt(redHex, 16) // 0
  var greenDec = parseInt(greenHex, 16) // 255
  var blueDec = parseInt(blueHex, 16) // 0

  return 'rgb(' + redDec + greenDec + blueDec + ')'
}
getRgb('#00FF00')

// parseInt -> pasa un valor hexadecimal(0123456789ABCDEF) a decimal (0123456789)

// Marc Vergara

function getRGB (hex) {
  var red = parseInt(hex.slice(1, 3), 16)
  var green = parseInt(hex.slice(3, 5), 16)
  var blue = parseInt(hex.slice(5, 7), 16)

  console.log('RGB => ' + red + ' ' + green + ' ' + blue)
}
getRGB('#01FF00')
