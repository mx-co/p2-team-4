import Button from "./classes/button.js";

window.preload = preload;
window.draw = draw;
window.mouseClicked = mouseClicked;

angleMode(DEGREES);

let imgTestBild;
let testSound;

let testSoundIsActive = true;

/*Seitenverhätnis 16:9 => Berechnung width=height * (16 / 9); height=height; 
Vorteil: Sowohl im Normalmodus, als auch im Vollbildmodus einsehbar. 
Im Normalmodus musste man auf die Tabs aufpassen..
Sollte es nicht funktioneren, dann Format: 1200, 675 oder 1080. 608 (Seitenverhältnise =16:9)*/
let newWidth = height * (16 / 9);

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
  loadAveriaFonts();

  imgTestBild = loadImage("./assets/img/testBild.png");
  testSound = loadSound("./Playground.mp3");
}

function mouseClicked() {
  if (testSoundIsActive === true) {
    testSound.play();
    testSoundIsActive = false;
  }
}

function loadingScreen() {}

// let button = new Button(300, 300, 300, 80);

function starScreen() {
  push();
  image(imgTestBild, 0, 0, newWidth, height);
  // button.display();
  // button.hitTestCustom();

  textFont(averiaSansLibreRegular);
  textSize(80);
  text("Metanoia", 300, 300);
  pop();
}

function draw() {
  starScreen();
}
