import { mouseClickedForStartScreen, startScreen } from "./startScreen.js";
import { guideScreen, mouseClickedForGuideScreen } from "./guideScreen.js";

import { mouseClickedForTestScreen, testScreen } from "./testScreen.js";
import { preload } from "./preload.js";

window.preload = preload;
window.draw = draw;
window.mouseClicked = mouseClicked;

angleMode(DEGREES);

let screenState = "start";

function mouseClickedForGameScreen() {}
function mouseClickedForEndScreen() {}

function mouseClicked() {
  if (screenState === "start") {
    mouseClickedForStartScreen();
  } else if (screenState === "guide") {
    mouseClickedForGuideScreen();
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
  } else if (screenState === "end") {
  } else if (screenState === "test") {
    testScreen();
  }
}
