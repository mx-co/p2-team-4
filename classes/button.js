import ButtonHitTest from "./buttonHitTest.js";

export default class Button extends ButtonHitTest {
  constructor(
    buttonX,
    buttonY,
    buttonWidth,
    buttonHeight,
    buttonText,
    hoverAnimationIsActive,
    textOffsetX,
    textOffsetY,
    textSize
  ) {
    super(buttonX, buttonY, buttonWidth, buttonHeight);
    this.buttonText = buttonText;
    this.buttonScale = 1;
    this.hoverAnimationIsActive = hoverAnimationIsActive;
    this.textOffsetX = textOffsetX;
    this.textOffsetY = textOffsetY;
    this.textSize = textSize;
  }

  display(fontStyle) {
    push();
    translate(this.buttonX, this.buttonY);
    scale(this.buttonScale);
    noStroke();
    fill(243, 233, 214);
    ellipse(0, 0, this.buttonHeight);

    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    textFont(fontStyle);
    textSize(this.textSize);
    text(this.buttonText, this.textOffsetX, this.textOffsetY);

    if (this.hoverAnimationIsActive && this.hitTestCircle()) {
      this.buttonScale = 1.02;
    } else {
      this.buttonScale = 1;
    }

    pop();
  }

  gsapAnimationToRight() {
    gsap.to(this, {
      duration: 1,
      buttonX: 1200 + this.buttonWidth,
      ease: "back.in(0.8)",
    });
  }

  gsapAnimationToLeft() {
    gsap.to(this, {
      duration: 1,
      buttonX: 0 - this.buttonWidth,
      ease: "back.in(0.8)",
    });
  }
}
