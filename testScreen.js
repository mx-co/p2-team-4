import AnswerButton from "./classes/answerButton.js";
import Textbox from "./classes/textbox.js";

import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  imgTestBild,
  testSound,
} from "./preload.js";

let mySign = new Textbox(
  600,
  550,
  600,
  100,
  "Du und dein Lieblings-Tüdelü streitet euch. \nEs entscheidet sich daraufhin, weil es unzufrieden mit der Beziehung ist, \nmit dir schluss zu machen. \nWie reagiesrt du?"
);

let button2 = new AnswerButton(
  400,
  620,
  300,
  50,
  "Ich möchte über den Trennungsgrund reden.",
  true
);
let button3 = new AnswerButton(
  800,
  620,
  300,
  50,
  "Ich ergreife so schnell wie möglich die Flucht.",
  true
);

let testSoundIsActive = true;

export function testScreen() {
  push();
  image(imgTestBild, 0, 0, 1200, 675);

  mySign.display(averiaSansLibreBold);
  button2.display(averiaSansLibreRegular);
  button3.display(averiaSansLibreRegular);

  pop();
}

export function mouseClickedForTestScreen() {
  if (testSoundIsActive === true) {
    testSound.play();
    testSoundIsActive = false;
  }
}
