import { averiaSansLibreBold, imgTestBild } from "./preload.js";
import Button from "./classes/button.js";

let startGuideButton = new Button(
  200,
  675 / 2,
  500,
  500,
  "hallo",
  true,
  0,
  0,
  20
);

export function guideScreen() {
  background(100, 100, 200);
  // BG kommt noch
  image(imgTestBild, 0, 0, 1200, 675);

  startGuideButton.display(averiaSansLibreBold);
}

export function mouseClickedForGuideScreen() {
  if (startGuideButton.hitTestCircle()) {
    return true;
  }
}
