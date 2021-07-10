import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  greenCircle,
  argumentVideo,
  guideScreenVideo,
} from "./preload.js";
import Button from "./classes/button.js";

let startGuideButton = new Button(
  900,
  675 / 2,
  300,
  300,
  "Start",
  true,
  0,
  0,
  20
);

export function guideScreen() {
  push();

  image(guideScreenVideo, 0, 0, 1200, 675);
  // background(200, 200, 100);

  startGuideButton.display(averiaSansLibreBold, greenCircle, 0.4);

  // testLeading();

  textFont(averiaSansLibreRegular);
  textSize(20);
  text(
    "Willkommen im verwunschenen Tanoiawald, \nein Ort der vollkommenen Urteilslosigkeit. \nHier lebt eine besondere Spezies, die Tüdelüs genannt wird. \nSie sind kleine romantische Fabelwesen. Du begibst dich nun auf eine Reise, \nin der du dich in das Leben eines Tüdeldüs hineinversetzt, das gerade \neine Trennung hinter sich hat. Genau wie du durchlebt es \nnun eine schwierige und anstrengende Zeit, vollgepackt \nmit lauter verschiedener Emotionen. In dieser \nSimulation geht es um deine auf diesen Gefühlen \nbasierenden Entscheidungen also entscheide \nzunächst aus dem Bauch heraus.",
    200,
    150
  );

  pop();
}

export function mouseClickedForGuideScreen() {
  // zum testen
  guideScreenVideo.loop();

  if (startGuideButton.hitTestCircle()) {
    argumentVideo.loop();

    return true;
  }
}
