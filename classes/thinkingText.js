export default class ThinkingText {
  constructor(text) {
    this.text = text;
  }

  display(font) {
    push();
    textSize(20);
    fill(51, 47, 45);
    textFont(font);
    textAlign(CENTER, CENTER);
    text(this.text, 600, 300);

    pop();
  }
}
