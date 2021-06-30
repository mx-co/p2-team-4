import Button from "./classes/button.js";

window.preload = preload;
window.draw = draw;
window.mouseClicked = mouseClicked;

angleMode(DEGREES);

// Test Variable
let imgTestBild;
let testSound;
let testSoundIsActive = true;

let newWidth = height * (16 / 9);
/*Seitenverhätnis 16:9 => Berechnung width=height * (16 / 9); height=height; 
Vorteil: Sowohl im Normalmodus, als auch im Vollbildmodus einsehbar. 
Im Normalmodus musste man auf die Tabs aufpassen..
Sollte es nicht funktioneren, dann Format: 1200, 675 oder 1080. 608 (Seitenverhältnise =16:9)*/

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
let button = new Button(
  width / 2,
  height / 1.3,
  width / 2.5,
  height / 8,
  "Du und dein Lieblings-Tüdelü streitet euch. \nEs entscheidet sich daraufhin, weil es unzufrieden mit der Beziehung ist, \nmit dir schluss zu machen. \nWie reagiesrt du?",
  false
);
let button2 = new Button(
  width / 2.9,
  height / 1.1,
  width / 5,
  height / 8,
  "Ich möchte über den Trennungsgrund reden.",
  true
);
let button3 = new Button(
  width / 1.6,
  height / 1.1,
  width / 5,
  height / 8,
  "Ich ergreife so schnell wie möglich die Flucht.",
  true
);

// // setzt die Textgröße jenachdem wie groß der Bildschirm ist
// let setScale = map(height, 0, hypotenuse(), 0, hypotenuse() / 35);

// // Berechnet diagonalenbreite des Bildschirms
// function hypotenuse() {
//   return sqrt(pow(width, 2) + pow(height, 2));
// }

function starScreen() {
  push();
  image(imgTestBild, 0, 0, newWidth, height);
  button.display(averiaSansLibreBold);
  // button.hitTestCustom();

  button2.display(averiaSansLibreLight);
  button3.display(averiaSansLibreRegular);

  pop();
}

function draw() {
  starScreen();
  // console.log(width)
}
