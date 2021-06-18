function setup() {
  var canvasSetting = createCanvas(1060, 700);
  canvasSetting.parent("simulation");

  frameRate(30);
}

window.setup = setup;

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
