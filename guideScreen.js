import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  greenCircle,
  argumentVideo,
  guideScreenVideo,
  buttonClickSound,
} from "./preload.js";
import Button from "./classes/button.js";

let startGuideButton = new Button(1000, 500, 250, 250, "Start", true, 0, 0, 20);

export function guideScreen() {
  push();

  image(guideScreenVideo, 0, 0, 1200, 675);
  // background(200, 200, 100);

  startGuideButton.display(averiaSansLibreBold, greenCircle, 0.35);

  textFont(averiaSansLibreRegular);

  textSize(20);
  textAlign(CENTER);
  text(
    "Willkommen im verwunschenen Tanoiawald, \nein Ort der vollkommenen Urteilslosigkeit. \nHier lebt eine besondere Spezies, die Tüdeldüs \ngenannt wird. Sie sind kleine romantische Fabelwesen. ",
    700,
    100
  );
  text(
    "Du begibst dich nun auf eine Reise, in der du dich in \ndas Leben eines Tüdeldüs hineinversetzt, das gerade \neine Trennung hinter sich hat. Genau wie du, durchlebt es \nnun eine schwierige und anstrengende Zeit, vollgepackt mit \nlauter verschiedener Emotionen. \nIn dieser Simulation geht es um deine auf diesen Gefühlen \nbasierenden Entscheidungen. Also entscheide \nzunächst aus dem Bauch heraus.",
    550,
    350
  );

  pop();
}

export function mouseClickedForGuideScreen() {
  // zum testen
  guideScreenVideo.loop();

  if (startGuideButton.hitTestCircle()) {
    argumentVideo.loop();
    buttonClickSound.play();

    return true;
  }
}
