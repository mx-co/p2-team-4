import AnswerButton from "./classes/answerButton.js";
import Button from "./classes/button.js";
import Textbox from "./classes/textbox.js";

window.preload = preload;
window.draw = draw;
window.mouseClicked = mouseClicked;

angleMode(DEGREES);

let screenState = "start";

// Test Variable
let imgTestBild;
let testSound;
let testSoundIsActive = true;
let testGif;

// Font Variable
let averiaSansLibreBold;
let averiaSansLibreBoldItalic;
let averiaSansLibreItalic;
let averiaSansLibreLight;
let averiaSansLibreLightItalic;
let averiaSansLibreRegular;

function loadAveriaFonts() {
  averiaSansLibreBold = loadFont(
    "./assets/fonts/averia/AveriaSansLibre-Bold.ttf"
  );
  averiaSansLibreBoldItalic = loadFont(
    "./assets/fonts/averia/AveriaSansLibre-BoldItalic.ttf"
  );
  averiaSansLibreItalic = loadFont(
    "./assets/fonts/averia/AveriaSansLibre-Italic.ttf"
  );
  averiaSansLibreLight = loadFont(
    "./assets/fonts/averia/AveriaSansLibre-Light.ttf"
  );
  averiaSansLibreLightItalic = loadFont(
    "./assets/fonts/averia/AveriaSansLibre-LightItalic.ttf"
  );
  averiaSansLibreRegular = loadFont(
    "./assets/fonts/averia/AveriaSansLibre-Regular.ttf"
  );
}

function preloadForTestScreen() {
  testSound = loadSound("./Playground.mp3");
  imgTestBild = loadImage("./assets/img/testBild.png");

  testGif = loadImage("./myGif.gif");
}

function preloadForStartScreen() {}
function preloadForGuideScreen() {}
function preloadForGameScreen() {}
function preloadForEndScreen() {}

function preload() {
  loadAveriaFonts();
  preloadForTestScreen();
}

function mouseClickedForTestScreen() {
  if (testSoundIsActive === true) {
    testSound.play();
    testSoundIsActive = false;
  }
}

function mouseClickedForStartScreen() {}
function mouseClickedForGuideScreen() {}
function mouseClickedForGameScreen() {}
function mouseClickedForEndScreen() {}

function mouseClicked() {
  if (screenState === "start") {
    mouseClickedForStartScreen();
  } else if (screenState === "game") {
    mouseClickedForGameScreen();
  } else if (screenState === "test") {
    mouseClickedForTestScreen();
  }
}

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

function testScreen() {
  push();
  image(imgTestBild, 0, 0, 1200, 675);

  image(testGif, 100, 100);

  mySign.display(averiaSansLibreBold);
  button2.display(averiaSansLibreRegular);
  button3.display(averiaSansLibreRegular);

  pop();
}

let startButton = new Button(
  1200,
  675 / 2,
  700,
  700,
  "hallo",
  true,
  -200,
  0,
  20
);

function startScreen() {
  background(0, 100, 100);
  startButton.display(averiaSansLibreBold);
}

function draw() {
  if (screenState === "start") {
    startScreen();
  } else if (screenState === "game") {
  } else if (screenState === "test") {
    testScreen();
  }
}
