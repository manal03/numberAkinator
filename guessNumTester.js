assert = chai.assert;
describe('Testing functions for number tester', function () {
it('Test 1: maxNum() returns something', function () {

    // assert is the core component of automated testing, by which we can verify wether
    // some condition is true or false. true represents the test has passed, and false 
    // represents a failure. See https://www.chaijs.com/api/assert/
    assert.exists(max_number, 'the return value is not null or undefined');
  })
  it('Test 2: the value is from type number', function () {
    assert.typeOf(max_number, 'number');
  });

  it('Test 3: the returned values are in [1,100] range', function () {
    for (var i = 1; i < 3000; i++) {
      result = max_number;
      assert(result <= 100 && result >= 1);
    }
})
});