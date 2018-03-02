var chai = require('chai')
var should = require('chai').should();
var expect = chai.expect;
var assert = chai.asset;
var Add = require('./UnitTests/math.js');

describe('Addition Tests', function()
{
  it('should return 3 when passed one and two', function()
{
    var numberOne = 1;
    var numberTwo = 2;

    var expectedResult = 3;

    var actualResult = Add(numberOne, numberTwo);

    actualResult.should.equal(expectedResult);
    expect(actualResult).to.equal(expectedResult);
    assert.equal(actualResult, expectedResult, "{test failed}")
  });

  it('should return 3 when passed one and two', function()
  {
      var numberOne = 1;
      var numberTwo = 4;
  
      var expectedResult = 3;
  
      var actualResult = Add(numberOne, numberTwo);
  
      actualResult.should.equal(expectedResult);
      expect(actualResult).to.not.equal(notExpectedResult);
    });
});