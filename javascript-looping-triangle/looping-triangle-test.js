const assert = require('chai').assert;
const LoopingTriangle = require('./looping-triangle');

describe ('LoopingTriangle', function() {

  it('should be a function', function() {
    assert.isFunction(LoopingTriangle);
  });

  it('should be an object', function() {
    var loopingTriangle = new LoopingTriangle();
    assert.isObject(loopingTriangle);
  });

  it('should have a length of nine', function() {
    const loopingTriangle = new LoopingTriangle(9);
    assert.equal(loopingTriangle.triangleLength, 9)
  });

  it('should return a triangle', function() {
    const loopingTriangle = new LoopingTriangle(10);
    loopingTriangle.drawLoopingTriangle()
  });
});
