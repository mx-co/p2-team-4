import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  buttonClickSound,
  greenCircle,
  negativeEndingVideo,
  positiveEndingVideo,
} from "./preload.js";
import Parameter from "./classes/parameter.js";
import {
  acceptanceCounter,
  angerCounter,
  bargainingCounter,
  denialCounter,
  depressionCounter,
} from "./gameScreen.js";
import Button from "./classes/button.js";

let denial = new Parameter(30, 15, denialCounter, 12, "Verweigerung");
let anger = new Parameter(30, 60, angerCounter, 12, "Zorn");
let bargaining = new Parameter(30, 105, bargainingCounter, 12, "Verhandeln");
let depression = new Parameter(30, 150, depressionCounter, 12, "Depression");
let acceptance = new Parameter(30, 195, acceptanceCounter, 12, "Akzeptanz");

let againButton = new Button(
  1050,
  675 / 2,
  200,
  200,
  "Erneut spielen",
  true,
  0,
  0,
  20
);

function fiveParameter() {
  denial.display(averiaSansLibreRegular);
  anger.display(averiaSansLibreRegular);
  bargaining.display(averiaSansLibreRegular);
  depression.display(averiaSansLibreRegular);
  acceptance.display(averiaSansLibreRegular);
}

export function endScreen() {
  push();

  // bedingung nicht richtig
  if (denialCounter < acceptanceCounter) {
    image(positiveEndingVideo, 0, 0, 1200, 675);
  } else {
    image(negativeEndingVideo, 0, 0, 1200, 675);
  }
  background(100, 230, 100);
  fiveParameter();
  againButton.display(averiaSansLibreBold, greenCircle, 0.3);
  pop();
  filling();
}

let fillingIsActive = true;
function filling() {
  if (fillingIsActive) {
    denial.parameterAnimation();
    anger.parameterAnimation();
    bargaining.parameterAnimation();
    depression.parameterAnimation();
    acceptance.parameterAnimation();
    fillingIsActive = false;
  }
}

export function mouseClickedForEndScreen() {
  positiveEndingVideo.loop();
  negativeEndingVideo.loop();

  if (againButton.hitTestCircle()) {
    denial.parameterAnimationReset();
    anger.parameterAnimationReset();
    bargaining.parameterAnimationReset();
    depression.parameterAnimationReset();
    acceptance.parameterAnimationReset();
    fillingIsActive = true;
    buttonClickSound.play();
    return true;
  }
}
