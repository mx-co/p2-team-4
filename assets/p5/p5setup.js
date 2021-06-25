function setup() {
  /*Seitenverhätnis 16:9 => Berechnung width=height * (16 / 9); height=height; 
Vorteil: Sowohl im Normalmodus, als auch im Vollbildmodus einsehbar. 
Im Normalmodus musste man auf die Tabs aufpassen*/
  var canvasSetting = createCanvas(windowHeight * (16 / 9), windowHeight);
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
