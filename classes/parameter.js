export default class Parameter {
  constructor(x, y, value, maximum) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.maximum = maximum;
    this.parameterWidth = 0;
  }

  small() {
    if (this.parameterWidth < 40) {
      return true;
    }
  }

  display() {
    push();
    //filling
    if (this.small()) {
      push();
      noStroke();
      fill(255);
      ellipse(this.x + 20, this.y + 20, this.parameterWidth);
      pop();
    } else {
      push();
      noStroke();
      fill(255);
      rect(this.x, this.y, this.parameterWidth, 40, 30);
      pop();
    }

    //shell
    push();
    strokeWeight(3);
    noFill();
    rect(this.x, this.y, 350, 40, 30);
    pop();

    pop();
  }

  parameterAnimation() {
    gsap.to(this, {
      duration: 1.5,
      ease: "linear",
      parameterWidth: (350 / this.maximum) * this.value,
    });
  }
}
