import ButtonHitTest from "./buttonHitTest.js";

export default class Button extends ButtonHitTest {
  constructor(buttonX, buttonY, buttonWidth, buttonHeight) {
    super(buttonX, buttonY, buttonWidth, buttonHeight);
  }

  //   CustomButton
  display() {
    push();
    translate(this.buttonX, this.buttonY);
    noStroke();
    fill(243, 233, 214),
      rect(
        -this.buttonWidth / 2,
        -this.buttonHeight / 2,
        this.buttonWidth,
        this.buttonHeight
      );

    ellipse(-this.buttonWidth / 2, 0, this.buttonHeight);
    ellipse(this.buttonWidth / 2, 0, this.buttonHeight);
    pop();
  }
}
