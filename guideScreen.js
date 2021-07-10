import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  greenCircle,
  guideScreenVideo,
} from "./preload.js";
import Button from "./classes/button.js";

let startGuideButton = new Button(
  900,
  675 / 2,
  400,
  400,
  "hallo",
  true,
  0,
  0,
  20
);

export function guideScreen() {
  // background(100, 100, 200);
  image(guideScreenVideo, 0, 0, 1200, 675);

  startGuideButton.display(averiaSansLibreBold, greenCircle, 0.6);
}

export function mouseClickedForGuideScreen() {
  guideScreenVideo.loop();

  if (startGuideButton.hitTestCircle()) {
    return true;
  }
}
