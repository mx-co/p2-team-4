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
export let startBGImg;

// gameScreen
export let aloneInBoatVideo;
export let argumentVideo;
export let aloneAtFavouritePlaceVideo;
export let togetherAtFavouritePlaceVideo;
export let sunriseVideo;
export let aloneInBedVideo;
export let movieNightVideo;
export let kitchenImg;
export let handyImg;

// endScreen
export let positiveEndingVideo;
export let negativeEndingVideo;

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
  //testSound = loadSound("./Playground.mp3");
  //imgTestBild = loadImage("./assets/img/testBild.png");
}
function preloadForStartScreen() {
  greenCircle = loadImage("./assets/img/greenCircle.png");
  startBGImg = loadImage(
    "./assets/img/backgroundScreens/startScreenHintergrund.png"
  );
}

function preloadForGuideScreen() {}

function preloadForGameScreen() {
  argumentVideo = createVideo("./assets/img/video/derStreit.mp4");
  argumentVideo.hide(); //.hide() verhindert die Zeichnung in neuer Dom, wird jetzt im Canvas gezeichnet
  aloneAtFavouritePlaceVideo = createVideo(
    "./assets/img/video/aloneAtFavouritePlace.mp4"
  );
  aloneAtFavouritePlaceVideo.hide();
  togetherAtFavouritePlaceVideo = createVideo(
    "./assets/img/video/togetherAtFavouritePlace.mp4"
  );
  togetherAtFavouritePlaceVideo.hide();
  aloneInBoatVideo = createVideo("./assets/img/video/alleinImBoot.mp4");
  aloneInBoatVideo.hide();
  sunriseVideo = createVideo("./assets/img/video/sonnenaufgang.mp4");
  sunriseVideo.hide();
  aloneInBedVideo = createVideo("./assets/img/video/sunlightAnimation.mp4");
  aloneInBedVideo.hide();

  movieNightVideo = createVideo(
    "./assets/img/video/chilligerAbendAnimation.mp4"
  );
  movieNightVideo.hide();
  kitchenImg = loadImage("./assets/img/backgroundScreens/kitchen.PNG");
  handyImg = loadImage("./assets/img/backgroundScreens/handy.png");
}

function preloadForEndScreen() {
  positiveEndingVideo = createVideo("./assets/img/video/positiveEnding.mp4");
  positiveEndingVideo.hide();
  negativeEndingVideo = createVideo("./assets/img/video/negativeEnding.mp4");
  negativeEndingVideo.hide();
}

export function preload() {
  loadAveriaFonts();

  preloadForTestScreen();
  preloadForStartScreen();
  preloadForGuideScreen();
  preloadForGameScreen();
  preloadForEndScreen();
}
