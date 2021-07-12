import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  blueCircle,
  buttonClickSound,
  greenCircle,
  negativeEndingVideo,
  positiveEndingVideo,
} from "./preload.js";
import Parameter from "./classes/parameter.js";
import { getCounters } from "./gameScreen.js";
import Button from "./classes/button.js";

let denial;
let anger;
let bargaining;
let depression;
let acceptance;

let colorModus;
let setColorCircle;
let init = true;

function setParameters() {
  denial = new Parameter(30, 15, getCounters()[0], 5, "Verweigerung");
  anger = new Parameter(30, 60, getCounters()[1], 3, "Zorn");
  bargaining = new Parameter(30, 105, getCounters()[2], 5, "Verhandeln");
  depression = new Parameter(30, 150, getCounters()[3], 4, "Depression");
  acceptance = new Parameter(30, 195, getCounters()[4], 11, "Annahme");
}

let againButton = new Button(
  1120,
  570,
  300,
  300,
  "Erneut spielen",
  true,
  -20,
  -10,
  20
);

function fiveParameter() {
  denial.display(averiaSansLibreRegular, colorModus);
  anger.display(averiaSansLibreRegular, colorModus);
  bargaining.display(averiaSansLibreRegular, colorModus);
  depression.display(averiaSansLibreRegular, colorModus);
  acceptance.display(averiaSansLibreRegular, colorModus);
}

export function endScreen() {
  push();

  if (init) {
    setParameters();
    init = false;
  }

  textFont(averiaSansLibreRegular);
  textSize(20);
  // text gfehlt
  if (getCounters()[4] >= getCounters()[5] / 2) {
    image(positiveEndingVideo, 0, 0, 1200, 675);
    colorModus = "bright";
    setColorCircle = greenCircle;
    text("hurra", 300, 300);
  } else {
    image(negativeEndingVideo, 0, 0, 1200, 675);
    colorModus = "dark";
    setColorCircle = blueCircle;
    text("on NO", 300, 300);
  }

  fiveParameter();
  againButton.display(averiaSansLibreBold, setColorCircle, 0.45);
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
  // fürs Testen
  // positiveEndingVideo.loop();
  // negativeEndingVideo.loop();

  if (againButton.hitTestCircle()) {
    denial.parameterAnimationReset();
    anger.parameterAnimationReset();
    bargaining.parameterAnimationReset();
    depression.parameterAnimationReset();
    acceptance.parameterAnimationReset();
    fillingIsActive = true;
    init = true;
    buttonClickSound.play();
    return true;
  }
}
