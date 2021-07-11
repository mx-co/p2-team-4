export default class Parameter {
  constructor(x, y, value, maximum, text) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.maximum = maximum;
    this.parameterWidth = 0;
    this.text = text;
  }

  small() {
    if (this.parameterWidth < 40) {
      return true;
    }
  }

  display(font) {
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

    // text
    textFont(font);
    textAlign(LEFT, CENTER);
    text(this.text, this.x + 20, this.y + 20);

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
