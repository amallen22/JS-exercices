describe('function fizzBuzz', function () {
  it('should exist', function () {
    expect(fizzBuzz).toBeDefined()
  })
  it('fizzBuzz should be a function', function () {
    expect(typeof fizzBuzz).toBe('function')
  })

  it('result should be a array', function () {
    var result = fizzBuzz()
    expect(Array.isArray(result)).toBe(true)
  })

  it('result should be a array of 100 element', function () {
    var result = fizzBuzz()

    expect(result.length).toBe(100)
  })

  it('element 1 of result should be a number', function () {
    var result = fizzBuzz()

    expect(typeof result[0]).toBe('number')
  })

  // it('if average is less than 60 result should be "F"', function () {
  //   var result = fizzBuzz(1, 1, 1)
  //   expect(result).toBe('F')
  // })

  // it('if average is less than 70 result should be "D"', function () {
  //   var result = fizzBuzz(62, 63, 64)
  //   expect(result).toBe('D')
  // })

  // it('if average is less than 80 result should be "C"', function () {
  //   var result = fizzBuzz(72, 73, 74)
  //   expect(result).toBe('C')
  // })

  // it('if average is less than 90 result should be "B"', function () {
  //   var result = fizzBuzz(82, 83, 84)
  //   expect(result).toBe('B')
  // })

  // it('if average is less than 100 result should be "A"', function () {
  //   var result = fizzBuzz(92, 93, 94)
  //   expect(result).toBe('A')
  // })

  // it('if average is less than 0 result should be "no grade"', function () {
  //   var result = fizzBuzz(-92, -93, -94)
  //   expect(result).toBe('no grade')
  // })
})
