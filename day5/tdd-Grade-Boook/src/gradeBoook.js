function getGrade (num1, num2, num3) {
  var num2 = num2 || 50
  var num3 = num3 || 50

  var average = (num1 + num2 + num3) / 3

  if (average < 0) return 'no grade'
  if (average <= 60) return 'F'
  if (average <= 70) return 'D'
  if (average <= 80) return 'C'
  if (average <= 90) return 'B'
  return 'A'
}
