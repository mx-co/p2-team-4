export default class ThinkingText {
  constructor(text) {
    this.text = text;
  }

  display(font) {
    push();
    textSize(30);
    fill(51, 47, 45);
    textFont(font);
    // x y anpassen
    text(this.text, 600, 300);

    pop();
  }
}
