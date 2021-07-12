export default class ThinkingText {
  constructor(text) {
    this.text = text;
  }

  display(font) {
    push();
    textSize(30);

    textFont(font);
    // x y anpassen
    text(this.text, 600, 300);

    pop();
  }
}
