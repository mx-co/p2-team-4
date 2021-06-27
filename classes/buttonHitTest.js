export default class ButtonHitTest {
  constructor(buttonX, buttonY, buttonWidth, buttonHeight) {
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
  }

  hitTestRec() {
    if (
      mouseX >= this.buttonX - this.buttonWidth / 2 &&
      mouseX <= this.buttonX + this.buttonWidth / 2 &&
      mouseY >= this.buttonY - this.buttonHeight / 2 &&
      mouseY <= this.buttonY + this.buttonHeight / 2
    ) {
      console.log("hitRectangle");
      return true;
    }
  }

  hitTestCircle() {
    let d = dist(mouseX, mouseY, this.buttonX, this.buttonY);

    if (d <= this.buttonWidth / 2) {
      console.log("hitCircle");
      return true;
    }
  }

  hitTestCustom() {
    let dLeft = dist(
      mouseX,
      mouseY,
      this.buttonX - this.buttonWidth / 2,
      this.buttonY
    );
    let dRight = dist(
      mouseX,
      mouseY,
      this.buttonX + this.buttonWidth / 2,
      this.buttonY
    );

    if (
      (mouseX >= this.buttonX - this.buttonWidth / 2 &&
        mouseX <= this.buttonX + this.buttonWidth / 2 &&
        mouseY >= this.buttonY - this.buttonHeight / 2 &&
        mouseY <= this.buttonY + this.buttonHeight / 2) ||
      dLeft <= this.buttonHeight / 2 ||
      dRight <= this.buttonHeight / 2
    ) {
      console.log("hitCostum");
      return true;
    }
  }
}
