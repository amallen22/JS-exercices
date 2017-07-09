// Improves the previous function so besides the conversion also identifies some basic colors:

// way 1

function getRGB(hex) {

  var color = '';

  switch (hex) {
    case '#000000';
    color = 'black'
    break;

    case '#FFFFFF';
    color = 'white'
    break;

    case '#FFFFFF';
    color = 'white'
    break;
  }
  var red = parseInt(hex.slice(1, 3), 16)
  var green = parseInt(hex.slice(3, 5), 16)
  var blue = parseInt(hex.slice(5, 7), 16)

  return ("RGB => " + red + " " + green + " " + blue)
}
getRGB('#01FF00');
