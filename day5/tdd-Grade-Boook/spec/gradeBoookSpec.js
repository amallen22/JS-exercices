describe('function getGrade', function () {
  it('should exist', function () {
    expect(getGrade).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof getGrade).toBe('function')
  })

  it('result should be a string', function () {
    var result = getGrade()
    expect(typeof result).toBe('string')
  })

  it('if average is less than 60 result should be "F"', function () {
    var result = getGrade(1, 1, 1)
    expect(result).toBe('F')
  })

  it('if average is less than 70 result should be "D"', function () {
    var result = getGrade(62, 63, 64)
    expect(result).toBe('D')
  })

  it('if average is less than 80 result should be "C"', function () {
    var result = getGrade(72, 73, 74)
    expect(result).toBe('C')
  })

  it('if average is less than 90 result should be "B"', function () {
    var result = getGrade(82, 83, 84)
    expect(result).toBe('B')
  })

  it('if average is less than 100 result should be "A"', function () {
    var result = getGrade(92, 93, 94)
    expect(result).toBe('A')
  })

  it('if average is less than 0 result should be "no grade"', function () {
    var result = getGrade(-92, -93, -94)
    expect(result).toBe('no grade')
  })
})
