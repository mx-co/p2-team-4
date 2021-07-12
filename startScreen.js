import {
  averiaSansLibreBold,
  startBGImg,
  greenCircle,
  averiaSansLibreRegular,
  guideScreenVideo,
  backgroundMusic,
  buttonClickSound,
  argumentVideo,
} from "./preload.js";
import Button from "./classes/button.js";

let backgroundMusicIsActive = true;

// Button should only clicked once
// Without clickIsActive you can click the button while it moves
let clickIsActive = true;

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

  if (startButton.buttonX >= 1260 + startButton.buttonHeight) {
    clickIsActive = true;
    return true;
  }

  pop();
}

export function mouseClickedForStartScreen() {
  if (startButton.hitTestCircle() && clickIsActive) {
    startButton.gsapAnimationToRight(1200);
    titleButton.gsapAnimationToLeft(200);
    clickIsActive = false;

    // starts and loops guidsScreen background video
    guideScreenVideo.loop();

    // latenz Reduzierung
    argumentVideo.play().stop();

    buttonClickSound.play();

    // wird nur einmal abgespielt und geht in einen loop, beim Neuspielen ist Musik nicht abgehakt
    if (backgroundMusicIsActive) {
      backgroundMusic.loop();
      backgroundMusicIsActive = false;
    }
  }
}
