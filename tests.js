const chai   = require('chai')
const should = require('chai').should();
const expect = chai.expect;
const assert = chai.asset;
const sinon  = require('sinon');
const Add = require('./UnitTests/math.js');

describe('Addition Tests', function()
{
  it('should return 3 when passed one and two', function()
{
  let numberOne = 1;
  let numberTwo = 2;

  let logSpy = sinon.spy();
  Add(numberOne, numberTwo, logSpy);

  logSpy.called.should.be.true;
 
  });


  let numberOne = 1;
  let numberTwo = 2;

  let logSpy = sinon.spy();
  Add(numberOne, numberTwo, logSpy);

  logSpy.calledWith(3).should.be.true;

});