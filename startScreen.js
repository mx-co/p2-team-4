import { averiaSansLibreBold, greenCircle } from "./preload.js";
import Button from "./classes/button.js";

let startButton = new Button(
  1200,
  675 / 2,
  700,
  700,
  "hallo",
  true,
  -200,
  0,
  20
);
let titleButton = new Button(200, 675 / 2, 500, 500, "hallo", false, 0, 0, 20);

export function startScreen() {
  pop();
  background(0, 100, 100);

  titleButton.display(averiaSansLibreBold);

  startButton.display(averiaSansLibreBold);

  // imageMode(CENTER);
  // image(greenCircle, 200, 675 / 2);

  if (startButton.buttonX >= 1200 + startButton.buttonHeight) {
    return true;
    // screenState = "guide";
  }

  push();
}

export function mouseClickedForStartScreen() {
  if (startButton.hitTestCircle()) {
    startButton.gsapAnimationToRight(1200);
    titleButton.gsapAnimationToLeft(200);
  }
}
