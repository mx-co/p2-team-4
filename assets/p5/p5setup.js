function setup() {
  var canvasSetting = createCanvas(1200, 675);
  canvasSetting.parent("simulation");
  frameRate(30);
}

window.setup = setup;

// Weg damit Browserfenster und Canvas sich immer ständig resizen können

// window.addEventListener("resize", function () {
//   resizeCanvas(windowWidth, windowHeight);
//   clear();
// });

new p5();
var width = windowWidth;
var height = windowHeight;

/*Seitenverhätnis 16:9 => Berechnung width=height * (16 / 9); height=height; 
Vorteil: Sowohl im Normalmodus, als auch im Vollbildmodus einsehbar. 
Im Normalmodus musste man auf die Tabs aufpassen

Vorgänger:
var canvasSetting = createCanvas(windowHeight * (16 / 9), windowHeight);
Beißt sich mit Texten, höhen und breiten von Button
*/
