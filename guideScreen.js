import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  greenCircle,
  argumentVideo,
  guideScreenVideo,
  buttonClickSound,
  startBGImg,
} from "./preload.js";
import Button from "./classes/button.js";
import Credit from "./classes/credit.js";

let startGuideButton = new Button(1010, 500, 250, 250, "Start", true, 0, 0, 50);
let creditButton = new Button(75, 600, 100, 100, "Credits", true, 0, 0, 15);

let credit = new Credit(600, 675 / 2);

let creditIsActive = false;

export function guideScreen() {
  push();
  image(guideScreenVideo, 0, 0, 1200, 675);

  startGuideButton.display(averiaSansLibreBold, greenCircle, 0.35);

  textFont(averiaSansLibreRegular);

  fill(51, 47, 45);
  textSize(20);
  textAlign(CENTER);
  text(
    "Willkommen im verwunschenen Tanoiawald, \nein Ort der vollkommenen Urteilslosigkeit. \nHier lebt eine besondere Spezies, die Tüdeldüs \ngenannt wird. Sie sind kleine romantische Fabelwesen. ",
    650,
    150
  );
  text(
    "Du begibst dich nun auf eine Reise, in der du dich \nin das Leben eines Tüdeldüs hineinversetzt, \ndas gerade eine Trennung hinter sich hat. \nGenau wie du, durchlebt es nun eine schwierige \nund anstrengende Zeit, vollgepackt mit lauter \nverschiedener Emotionen. \nIn dieser Simulation geht es um deine auf \ndiesen Gefühlen basierenden Entscheidungen. \nAlso entscheide zunächst \naus dem Bauch heraus.",

    650,
    300
  );

  if (creditIsActive) {
    image(startBGImg, 0, 0, 1200, 675);
    credit.display(averiaSansLibreBold, averiaSansLibreRegular);
  }
  creditButton.display(averiaSansLibreBold, greenCircle, 0.15);

  pop();
}

export function mouseClickedForGuideScreen() {
  if (creditButton.hitTestCircle() && creditIsActive === false) {
    creditIsActive = true;
    buttonClickSound.play();
  } else if (creditButton.hitTestCircle() && creditIsActive) {
    creditIsActive = false;
    buttonClickSound.play();
  }

  if (startGuideButton.hitTestCircle() && creditIsActive === false) {
    argumentVideo.loop();
    buttonClickSound.play();

    return true;
  }
}
