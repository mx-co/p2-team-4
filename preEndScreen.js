import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  negativeThinkingImg,
  positiveThinkingImg,
} from "./preload.js";

function positiveText() {
  push();
textFont
  pop();
}

function positive() {
  push();
  image(positiveThinkingImg, 0, 0, 1200, 675);
  pop();
}

function negative() {
  push();
  image(negativeThinkingImg, 0, 0, 1200, 675);
  pop();
}

export function preEndScreen() {
  push();

  if ("s") {
    positive();
  } else if ("s") {
    negative();
  }

  pop();
}

export function mouseClickedForPreEndScreen() {}
