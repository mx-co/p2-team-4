import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
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

let denial = new Parameter(30, 15, denialCounter, 12, "Denial");
let anger = new Parameter(30, 60, angerCounter, 12, "Anger");
let bargaining = new Parameter(30, 105, bargainingCounter, 12, "Bargaining");
let depression = new Parameter(30, 150, depressionCounter, 12, "Depression");
let acceptance = new Parameter(30, 195, acceptanceCounter, 12, "Acceptance");

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
  if (denialCounter > acceptanceCounter) {
    image(positiveEndingVideo, 0, 0, 1200, 675);
  } else {
    image(negativeEndingVideo, 0, 0, 1200, 675);
  }
  // background(100, 230, 100);
  fiveParameter();
  againButton.display(averiaSansLibreBold, greenCircle, 0.3);
  pop();
  // console.log(acceptanceCounter);
}

export function mouseClickedForEndScreen() {
  positiveEndingVideo.loop();
  negativeEndingVideo.loop();
  anger.parameterAnimation();
  denial.parameterAnimation();
  bargaining.parameterAnimation();
  depression.parameterAnimation();
  acceptance.parameterAnimation();

  if (againButton.hitTestCircle()) {
    // acceptanceCounter = 0;
  } //funktioniert nicht
}
