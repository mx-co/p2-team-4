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

  display(fontStyle, myImg, imgSize) {
    push();
    translate(this.buttonX, this.buttonY);
    scale(this.buttonScale);
    noStroke();
    fill(42, 87, 66);
    ellipse(0, 0, this.buttonHeight);

    push();
    imageMode(CENTER);
    scale(imgSize);
    image(myImg, 0, 0);
    pop();

    fill(243, 233, 214);
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

  subTitle(fontStyle, subText, subSize, subOffsetX, subOffsetY) {
    push();
    translate(this.buttonX, this.buttonY);
    scale(this.buttonScale);
    fill(243, 233, 214);
    textAlign(CENTER, CENTER);
    textFont(fontStyle);
    textSize(subSize);
    text(subText, subOffsetX, subOffsetY);

    pop();
  }

  gsapAnimationToRight(buttonXstart) {
    gsap.to(this, {
      duration: 1,
      buttonX: 1220 + this.buttonHeight,
      ease: "back.in(0.8)",
      onComplete: () => {
        gsap.to(this, {
          duration: 1,
          buttonX: 1300 + this.buttonHeight,
          onComplete: () => {
            gsap.to(this, {
              buttonX: buttonXstart,
            });
          },
        });
      },
    });
  }

  gsapAnimationToLeft(buttonXstart) {
    gsap.to(this, {
      duration: 1,
      buttonX: -20 - this.buttonHeight,
      ease: "back.in(0.8)",
      onComplete: () => {
        gsap.to(this, {
          duration: 1,
          buttonX: -100 - this.buttonHeight,
          onComplete: () => {
            gsap.to(this, {
              buttonX: buttonXstart,
            });
          },
        });
      },
    });
  }
}
