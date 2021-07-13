import { mouseClickedForStartScreen, startScreen } from "./startScreen.js";
import { guideScreen, mouseClickedForGuideScreen } from "./guideScreen.js";
import {
  gameScreen,
  mouseClickedForGameScreen,
  resetCounters,
} from "./gameScreen.js";
import { endScreen, mouseClickedForEndScreen } from "./endScreen.js";

import { preload } from "./preload.js";

window.preload = preload;
window.draw = draw;
window.mouseClicked = mouseClicked;

angleMode(DEGREES);

let screenState = "start";

function mouseClicked() {
  if (screenState === "start") {
    mouseClickedForStartScreen();
  } else if (screenState === "guide") {
    if (mouseClickedForGuideScreen()) {
      screenState = "game";
    }
  } else if (screenState === "game") {
    if (mouseClickedForGameScreen()) {
      screenState = "end";
    }
  } else if (screenState === "end") {
    if (mouseClickedForEndScreen()) {
      resetCounters();
      console.log("reset");
      screenState = "start";
    }
  }
}

function draw() {
  if (screenState === "start") {
    startScreen();
    if (startScreen()) {
      screenState = "guide";
    }
  } else if (screenState === "guide") {
    guideScreen();
  } else if (screenState === "game") {
    gameScreen();
  } else if (screenState === "end") {
    endScreen();
  }
}
