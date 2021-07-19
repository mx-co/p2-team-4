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
let fillingIsActive = true;
let init = true;

let againButton = new Button(
  1120,
  570,
  300,
  300,
  "Erneut \nstarten",
  true,
  -20,
  -10,
  35
);

function setParameters() {
  denial = new Parameter(30, 15, getCounters()[0], 5, "Verweigerung");
  anger = new Parameter(30, 60, getCounters()[1], 3, "Zorn");
  bargaining = new Parameter(30, 105, getCounters()[2], 5, "Verhandeln");
  depression = new Parameter(30, 150, getCounters()[3], 4, "Depression");
  acceptance = new Parameter(30, 195, getCounters()[4], 11, "Annahme");
}

function fiveParameter() {
  denial.display(averiaSansLibreRegular, colorModus);
  anger.display(averiaSansLibreRegular, colorModus);
  bargaining.display(averiaSansLibreRegular, colorModus);
  depression.display(averiaSansLibreRegular, colorModus);
  acceptance.display(averiaSansLibreRegular, colorModus);
}

// run animation once, while fillingIsActive ===true
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

export function endScreen() {
  push();

  // initieted parameters
  if (init) {
    setParameters();
    init = false;
  }

  textFont(averiaSansLibreRegular);
  textSize(20);

  // acceptance parameter should be higher  than amount of clicks to get the brightScreen
  if (getCounters()[4] >= getCounters()[5] / 2) {
    image(positiveEndingVideo, 0, 0, 1200, 675);
    colorModus = "bright";
    setColorCircle = greenCircle;
    fill(51, 47, 45);
    text(
      "Du hast die ersten Schritte getan und bist nun auf einem \nguten Weg, die Trennung zu verarbeiten. Auch wenn es ein \nlanger Prozess sein kann, solltest du dich auch von \nRückschlägen nicht entmutigen lassen. Wenn du die \nanderen Entscheidungen noch ausprobieren \nmöchtest, kannst du gerne einen \nzweiten Durchgang starten.",
      30,
      340
    );
  } else {
    image(negativeEndingVideo, 0, 0, 1200, 675);
    colorModus = "dark";
    setColorCircle = blueCircle;
    fill(243, 233, 214);
    text(
      "Viele deiner Entscheidungen hätten in der Realität leider \nnegative Auswirkungen auf deinen Bewältigungsprozess. \nAuch wenn es in dieser persönlichen Angelegenheit kein \nRichtig oder Falsch gibt, solltest du deine Wahl noch \neinmal überdenken. In einem zweiten Durchgang der \nSimulation könntest du nun überlegen, welche \nAuswirkungen deine Entscheidungen auf \ndich und dein Umfeld haben könnten.",
      30,
      340
    );
  }

  fiveParameter();
  againButton.display(averiaSansLibreBold, setColorCircle, 0.45);
  pop();
  filling();
}

export function mouseClickedForEndScreen() {
  // positiveEndingVideo.loop();
  // negativeEndingVideo.loop();

  if (againButton.hitTestCircle()) {
    // activate animation
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
