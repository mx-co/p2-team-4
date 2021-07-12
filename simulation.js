import { mouseClickedForStartScreen, startScreen } from "./startScreen.js";
import { guideScreen, mouseClickedForGuideScreen } from "./guideScreen.js";
import {
  gameScreen,
  mouseClickedForGameScreen,
  resetCounters,
} from "./gameScreen.js";
import { endScreen, mouseClickedForEndScreen } from "./endScreen.js";

import { testScreen, mouseClickedForTestScreen } from "./testScreen.js";
import { preload } from "./preload.js";

window.preload = preload;
window.draw = draw;
window.mouseClicked = mouseClicked;

angleMode(DEGREES);

let screenState = "start";

function mouseClicked() {
  // besonders in startScreen wird hitTest ausserhlab des Canvas erkannt
  if (mouseX >= 0 && mouseX <= 1200 && mouseY >= 0 && mouseY <= 675) {
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
        screenState = "start";
      }
    }
    // koomt RAUS
    else if (screenState === "test") {
      mouseClickedForTestScreen();
    }
  }
}

function draw() {
  if (screenState === "start") {
    startScreen();
    if (startScreen()) {
      // wenn button auf bestimmte position ist, dann return true
      screenState = "guide";
    }
  } else if (screenState === "guide") {
    guideScreen();
  } else if (screenState === "game") {
    gameScreen();
  } else if (screenState === "end") {
    endScreen();
  } else if (screenState === "test") {
    testScreen();
  }
}
