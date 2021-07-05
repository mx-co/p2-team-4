import ButtonHitTest from "./buttonHitTest.js";

export default class AnswerButton extends ButtonHitTest {
  constructor(
    buttonX,
    buttonY,
    buttonWidth,
    buttonHeight,
    buttonText,
    hoverAnimationIsActive
  ) {
    super(buttonX, buttonY, buttonWidth, buttonHeight);
    this.buttonText = buttonText;
    this.buttonScale = 1;
    this.hoverAnimationIsActive = hoverAnimationIsActive;
  }

  //   CustomButton
  display(fontStyle) {
    push();
    translate(this.buttonX, this.buttonY);
    scale(this.buttonScale);
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

    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    textFont(fontStyle);
    textSize(15);
    text(this.buttonText, 0, 0);

    if (this.hoverAnimationIsActive && this.hitTestCustom()) {
      this.buttonScale = 1.02;
    } else {
      this.buttonScale = 1;
    }

    pop();
  }
}
