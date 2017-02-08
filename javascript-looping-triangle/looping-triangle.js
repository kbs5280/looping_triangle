'use strict'

class LoopingTriangle {
  constructor(triangleLength) {
    this.triangleLength = triangleLength
    this.triangle = ['#'];
    this.counter = 0;
  }

  drawLoopingTriangle() {
    while(this.triangleLength > this.counter) {
      this.triangle.unshift(' ');
      this.counter += 1;
    }
    this.counter = 0;
    while(this.triangleLength > this.counter) {
      console.log(this.triangle.join(" "));
      this.triangle.shift(' ');
      this.triangle.push('#');
      this.counter += 1;
    }
  }
}

module.exports = LoopingTriangle;
