import {
  averiaSansLibreBold,
  startBGImg,
  greenCircle,
  averiaSansLibreRegular,
  guideScreenVideo,
  backgroundMusic,
  buttonClickSound,
} from "./preload.js";
import Button from "./classes/button.js";

let startButton = new Button(
  1200,
  675 / 2,
  700,
  700,
  "Weiter",
  true,
  -180,
  0,
  50
);
let titleButton = new Button(200, 200, 800, 800, "Metanoia", false, 90, 0, 100);

export function startScreen() {
  push();
  background(42, 87, 66);

  image(startBGImg, 0, 0, 1200, 675);

  titleButton.display(averiaSansLibreBold, greenCircle, 1.1);
  titleButton.subTitle(
    averiaSansLibreRegular,
    "eine Reise zur Veränderung \ndes Mindsets",
    30,
    90,
    100
  );

  startButton.display(averiaSansLibreBold, greenCircle, 1.1);

  if (startButton.buttonX >= 1280 + startButton.buttonHeight) {
    return true;
    // screenState = "guide"; (in simulation.js)
  }

  pop();
}

export function mouseClickedForStartScreen() {
  if (startButton.hitTestCircle()) {
    startButton.gsapAnimationToRight(1200);
    titleButton.gsapAnimationToLeft(200);

    // starts and loops guidsScreen background video
    guideScreenVideo.loop();

    buttonClickSound.play();
    // starts backgroundMusic
    // event bei nochmal spielen nicht ausschalten
    backgroundMusic.loop();
  }
}
