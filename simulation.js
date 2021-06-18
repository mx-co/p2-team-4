let img = loadImage("./assets/testBild.png");

function draw() {
  fill(255, 0, 255);
  // oder 1080. 608 (Seitenverhältnise =16:9)

  rect(0, 0, 1200, 675);

  image(img, 0, 0, 1200, 675);
}

window.draw = draw;
