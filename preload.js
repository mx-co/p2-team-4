// test Variable
export let imgTestBild;
export let testSound;

// Font Variable
export let averiaSansLibreBold;
export let averiaSansLibreBoldItalic;
export let averiaSansLibreItalic;
export let averiaSansLibreLight;
export let averiaSansLibreLightItalic;
export let averiaSansLibreRegular;

// startScreen
export let greenCircle;

// gameScreen
export let aloneInBoatVideo;
export let argumentVideo;
export let sunriseVideo;

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
}
function preloadForStartScreen() {
  greenCircle = loadImage("./assets/img/greenCircle.png");
}

function preloadForGuideScreen() {}

function preloadForGameScreen() {
  argumentVideo = createVideo("./assets/img/video/derStreit.mp4");
  argumentVideo.hide(); //.hide() verhindert die Zeichnung in neuer Dom, wird jetzt im Canvas gezeichent
  aloneInBoatVideo = createVideo("./assets/img/video/alleinImBoot.mp4");
  aloneInBoatVideo.hide();
  sunriseVideo = createVideo("./assets/img/video/sonnenaufgang.mp4");
  sunriseVideo.hide();
}

function preloadForEndScreen() {}

export function preload() {
  loadAveriaFonts();

  preloadForTestScreen();
  preloadForStartScreen();
  preloadForGuideScreen();
  preloadForGameScreen();
  preloadForEndScreen();
}
