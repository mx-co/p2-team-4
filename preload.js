// test Variable
export let imgTestBild;
export let testSound;
export let testGif;

// Font Variable
export let averiaSansLibreBold;
export let averiaSansLibreBoldItalic;
export let averiaSansLibreItalic;
export let averiaSansLibreLight;
export let averiaSansLibreLightItalic;
export let averiaSansLibreRegular;

// startScreen
export let greenCircle;

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

function preloadForTestScreen() {
  testSound = loadSound("./Playground.mp3");
  imgTestBild = loadImage("./assets/img/testBild.png");
  testGif = loadImage("./myGif.gif");
}

function preloadForStartScreen() {
  greenCircle = loadImage("./assets/img/greenCircle.png");
}

function preloadForGuideScreen() {}

function preloadForGameScreen() {}

function preloadForEndScreen() {}

export function preload() {
  loadAveriaFonts();

  preloadForTestScreen();
  preloadForStartScreen();
  preloadForGuideScreen();
  preloadForGameScreen();
  preloadForEndScreen();
}
