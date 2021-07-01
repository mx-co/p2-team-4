import Button from "./classes/button.js";
import Textbox from "./classes/textbox.js";

window.preload = preload;
window.draw = draw;
window.mouseClicked = mouseClicked;

angleMode(DEGREES);

// Test Variable
let imgTestBild;
let testSound;
let testSoundIsActive = true;
let testGif;

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

function preload() {
  testSound = loadSound("./G&EMIX.mp3");
  loadAveriaFonts();

  imgTestBild = loadImage("./assets/img/testBild.png");

  testGif = loadImage("./myGif.gif");
}

function mouseClicked() {
  if (testSoundIsActive === true) {
    testSound.play();
    testSoundIsActive = false;
  }
}

let mySign = new Textbox(
  600,
  550,
  600,
  100,
  "Du und dein Lieblings-Tüdelü streitet euch. \nEs entscheidet sich daraufhin, weil es unzufrieden mit der Beziehung ist, \nmit dir schluss zu machen. \nWie reagiesrt du?"
);

let button2 = new Button(
  400,
  620,
  300,
  50,
  "Ich möchte über den Trennungsgrund reden.",
  true
);
let button3 = new Button(
  800,
  620,
  300,
  50,
  "Ich ergreife so schnell wie möglich die Flucht.",
  true
);

function starScreen() {
  push();
  image(imgTestBild, 0, 0, 1200, 675);

  image(testGif, 100, 100);

  mySign.display(averiaSansLibreBold);
  button2.display(averiaSansLibreRegular);
  button3.display(averiaSansLibreRegular);

  pop();
}

function draw() {
  starScreen();
  // console.log(width)
}
