import ButtonHitTest from "./buttonHitTest.js";

export default class AnswerButton extends ButtonHitTest {
  constructor(buttonX, buttonText, hoverAnimationIsActive) {
    super(buttonX, 635, 300, 50);
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
    fill(243, 233, 214);
    ellipse(-this.buttonWidth / 2, 0, this.buttonHeight);
    ellipse(this.buttonWidth / 2, 0, this.buttonHeight);
    rect(
      -this.buttonWidth / 2,
      -this.buttonHeight / 2,
      this.buttonWidth,
      this.buttonHeight
    );

    if (this.hoverAnimationIsActive && this.hitTestCustom()) {
      this.buttonScale = 1.02;
      stroke(62, 58, 53);
    } else {
      this.buttonScale = 1;
      // noStroke();
      stroke(244, 245, 234);
    }

    strokeWeight(2);
    noFill();
    rect(
      -this.buttonWidth / 2 - this.buttonHeight / 2,
      -this.buttonHeight / 2,
      this.buttonWidth + this.buttonHeight,
      this.buttonHeight,
      50
    );

    noStroke();
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    textFont(fontStyle);
    textSize(15);
    text(this.buttonText, 0, 0);

    pop();
  }
}
