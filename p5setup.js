function setup() {
  var canvasSetting = createCanvas(1200, 675);
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
