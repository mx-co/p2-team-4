export default class Textbox {
  constructor(signX, signY, signWidth, signHeight, signText) {
    this.signX = signX;
    this.signY = signY;
    this.signWidth = signWidth;
    this.signHeight = signHeight;
    this.signText = signText;
  }

  display(fontStyle) {
    push();
    translate(this.signX, this.signY);
    fill(243, 233, 214);
    noStroke();
    rect(
      -this.signWidth / 2,
      -this.signHeight / 2,
      this.signWidth,
      this.signHeight
    );

    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    textFont(fontStyle);
    textSize(15);
    text(this.signText, 0, 0);

    pop();
  }
}
