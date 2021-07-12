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

  display(font, colorModus) {
    push();
    //filling

    if (colorModus === "bright") {
      stroke(141, 180, 127);
      fill(141, 180, 127);
    } else if (colorModus === "dark") {
      stroke(100, 135, 160);
      fill(100, 135, 160);
    }
    push();
    noStroke();
    if (this.small()) {
      ellipse(this.x + 20, this.y + 20, this.parameterWidth);
    } else {
      noStroke();
      rect(this.x, this.y, this.parameterWidth, 40, 30);
    }
    pop();

    //shell
    strokeWeight(3);
    // stroke(100, 135, 160);
    // text
    push();
    noStroke();
    if (colorModus === "bright") {
      fill(62, 58, 53);
    } else if (colorModus === "dark") {
      fill(243, 233, 214);
    }
    textFont(font);
    textSize(20);
    textAlign(LEFT, CENTER);
    text(this.text, this.x + 20, this.y + 18);
    pop();

    noFill();
    rect(this.x, this.y, 350, 40, 30);

    pop();
  }

  parameterAnimation() {
    gsap.to(this, {
      duration: 1.5,
      ease: "linear",
      parameterWidth: (350 / this.maximum) * this.value,
    });
  }

  parameterAnimationReset() {
    this.parameterWidth = 0;
  }
}
