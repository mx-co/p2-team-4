import Button from "./classes/button.js";

window.preload = preload;
window.draw = draw;
window.mouseClicked = mouseClicked;

angleMode(DEGREES);

/*Seitenverhätnis 16:9 => Berechnung width=height * (16 / 9); height=height; 
Vorteil: Sowohl im Normalmodus, als auch im Vollbildmodus einsehbar. 
Im Normalmodus musste man auf die Tabs aufpassen..
Sollte es nicht funktioneren, dann Format: 1200, 675 oder 1080. 608 (Seitenverhältnise =16:9)*/
let newWidth = height * (16 / 9);

let imgTestBild;
let testSound;

let testSoundIsActive = true;

function preload() {
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
  image(imgTestBild, 0, 0, newWidth, height);
  // button.display();
  // button.hitTestCustom();
}

function draw() {
  starScreen();
}
