export default class Credit {
  constructor(crediX, creditY) {
    this.creditX = crediX;
    this.creditY = creditY;
  }

  display(fontBold, fontRegular) {
    push();
    translate(this.creditX, this.creditY);
    background(243, 233, 214, 150);

    fill(141, 180, 127);
    noStroke();
    rect(-200, -250, 400, 500, 20);
    fill(51, 47, 45);
    textAlign(CENTER, CENTER);
    textSize(65);
    textFont(fontBold);
    text("Metanoia", 0, -210);

    textSize(20);
    text("eine Reise zur Veränderung \ndes Mindsets", 0, -150);

    textFont(fontRegular);
    text(
      "Eine interaktive Simulation \nvon \n\nKatharina Mass \nMax Mittelstädt \n Melissa Schumacher",
      0,
      0
    );
    text("Libary: gsap.js, p5.js, p5.sound \nSound: ProductionCrate", 0, 210);

    pop();
  }
}
