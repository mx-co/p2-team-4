export default class Textbox {
  constructor(signText) {
    this.signX = 600;
    this.signY = 560;
    this.signWidth = 700;
    this.signHeight = 80;
    this.signText = signText;
  }

  display(fontStyle, img) {
    push();
    translate(this.signX, this.signY);
    fill(243, 233, 214);
    noStroke();
    // rect(
    //   -this.signWidth / 2,
    //   -this.signHeight / 2,
    //   this.signWidth,
    //   this.signHeight,
    //   5
    // );

    push();
    imageMode(CENTER);
    image(img, 0, 0, this.signWidth + 20, this.signHeight + 20);
    pop();

    fill(51, 47, 45);
    textAlign(CENTER, CENTER);
    textFont(fontStyle);
    textSize(15);
    text(this.signText, 0, 0);

    pop();
  }
}
