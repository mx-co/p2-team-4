import { mouseClickedForStartScreen, startScreen } from "./startScreen.js";
import { guideScreen, mouseClickedForGuideScreen } from "./guideScreen.js";
import { gameScreen, mouseClickedForGameScreen } from "./gameScreen.js";
import { endScreen, mouseClickedForEndScreen } from "./endScreen.js";

import { testScreen, mouseClickedForTestScreen } from "./testScreen.js";
import { preload } from "./preload.js";

window.preload = preload;
window.draw = draw;
window.mouseClicked = mouseClicked;

angleMode(DEGREES);

let screenState = "game";

function mouseClicked() {
  if (screenState === "start") {
    mouseClickedForStartScreen();
  } else if (screenState === "guide") {
    if (mouseClickedForGuideScreen()) {
      screenState = "game";
    }
  } else if (screenState === "game") {
    mouseClickedForGameScreen();
  } else if (screenState === "end") {
    mouseClickedForEndScreen();
  } else if (screenState === "test") {
    mouseClickedForTestScreen();
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
