import { positiveEndingVideo } from "./preload.js";
import Parameter from "./classes/parameter.js";

let anger = new Parameter(30, 15, 3, 12);

export function endScreen() {
  push();
  image(positiveEndingVideo, 0, 0, 1200, 675);
  anger.display();

  pop();
}

export function mouseClickedForEndScreen() {
  positiveEndingVideo.loop();
  anger.parameterAnimation();
}
