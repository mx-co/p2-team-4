angleMode(DEGREES);

/*Seitenverhätnis 16:9 => Berechnung width=height * (16 / 9); height=height; 
Vorteil: Sowohl im Normalmodus, als auch im Vollbildmodus einsehbar. 
Im Normalmodus musste man auf die Tabs aufpassen..
Sollte es nicht funktioneren, dann Format: 1200, 675 oder 1080. 608 (Seitenverhältnise =16:9)*/
let newWidth = height * (16 / 9);

let imgTestBild;
let testSound;

let soundIsActive = true;

function preload() {
  imgTestBild = loadImage("./assets/img/testBild.png");
  testSound = loadSound("./Playground.mp3");
}
window.preload = preload;

function mouseClicked() {
  if (soundIsActive === true) {
    testSound.play();
    soundIsActive = false;
  }
}

window.mouseClicked = mouseClicked;

function draw() {
  image(imgTestBild, 0, 0, newWidth, height);
}

window.draw = draw;
