// Font Variable
export let averiaSansLibreBold;
export let averiaSansLibreRegular;

// AllScreens
export let backgroundMusic;
export let buttonClickSound;
export let greenCircle;
export let blueCircle;

// startScreen
export let startBGImg;

// guideScreen
export let guideScreenVideo;

// gameScreen
export let aloneInBoatVideo;
export let argumentVideo;
export let aloneAtFavouritePlaceVideo;
export let togetherAtFavouritePlaceVideo;
export let sunriseVideo;
export let aloneInBedVideo;
export let movieNightVideo;

export let friendIsCallingVideo;
export let handyVideo;
export let sadVideo;
export let lightPartyVideo;
export let talkAtLightPartyVideo;
export let dancePartyVideo;

export let aboutExImg;
export let talkAboutExImg;
export let kitchenImg;

// preEndScreen
export let positiveThinkingImg;
export let negativeThinkingImg;

// endScreen
export let positiveEndingVideo;
export let negativeEndingVideo;

function loadAveriaFonts() {
  averiaSansLibreBold = loadFont("./assets/fonts/AveriaSansLibre-Bold.ttf");
  averiaSansLibreRegular = loadFont(
    "./assets/fonts/AveriaSansLibre-Regular.ttf"
  );
}

function preloadForStartScreen() {
  startBGImg = loadImage("./assets/img/startScreenBackground.PNG");
}

function preloadForGuideScreen() {
  guideScreenVideo = createVideo("./assets/video/guideScreen.mov");
  guideScreenVideo.hide();
}

function preloadForGameScreen() {
  argumentVideo = createVideo("./assets/video/argument.mp4");
  argumentVideo.hide();
  //.hide() diseble drawing in new Dom. Now in canvas

  aloneAtFavouritePlaceVideo = createVideo(
    "./assets/video/aloneAtFavouritePlace.mp4"
  );
  aloneAtFavouritePlaceVideo.hide();

  togetherAtFavouritePlaceVideo = createVideo(
    "./assets/video/togetherAtFavouritePlace.mp4"
  );
  togetherAtFavouritePlaceVideo.hide();

  aloneInBoatVideo = createVideo("./assets/video/aloneInBoat.mp4");
  aloneInBoatVideo.hide();
  sunriseVideo = createVideo("./assets/video/sunrise.mp4");
  sunriseVideo.hide();
  aloneInBedVideo = createVideo("./assets/video/sunlightAnimation.mp4");
  aloneInBedVideo.hide();
  handyVideo = createVideo("./assets/video/fairygramFollow.mp4");
  handyVideo.hide();
  friendIsCallingVideo = createVideo("./assets/video/bestFriendIsCalling.mov");
  friendIsCallingVideo.hide();
  movieNightVideo = createVideo("./assets/video/movieNight.mp4");
  movieNightVideo.hide();
  sadVideo = createVideo("./assets/video/aloneOnThePhone.mp4");
  sadVideo.hide();
  lightPartyVideo = createVideo("./assets/video/lightParty.mp4");
  lightPartyVideo.hide();
  talkAtLightPartyVideo = createVideo("./assets/video/talkAtLightParty.mp4");
  talkAtLightPartyVideo.hide();
  dancePartyVideo = createVideo("./assets/video/danceParty.mp4");
  dancePartyVideo.hide();

  aboutExImg = loadImage("./assets/img/funEvening.png");
  talkAboutExImg = loadImage("./assets/img/talking.png");
  kitchenImg = loadImage("./assets/img/kitchen.PNG");
  positiveThinkingImg = loadImage("./assets/img/positiveThinking.png");
  negativeThinkingImg = loadImage("./assets/img/negativeThinking.png");
}

function preloadForEndScreen() {
  positiveEndingVideo = createVideo("./assets/video/positiveEnding.mp4");
  positiveEndingVideo.hide();
  negativeEndingVideo = createVideo("./assets/video/negativeEnding.mp4");
  negativeEndingVideo.hide();
}

export function preload() {
  loadAveriaFonts();
  preloadForStartScreen();
  preloadForGuideScreen();
  preloadForGameScreen();
  preloadForEndScreen();
  backgroundMusic = loadSound(
    "./assets/sounds/soundscrate-the-friendly-elf.mp3"
  );
  backgroundMusic.setVolume(0.1);

  buttonClickSound = loadSound(
    "./assets/sounds/soundscrate-graphics-application-notification-4.wav"
  );
  buttonClickSound.setVolume(0.4);

  greenCircle = loadImage("./assets/img/greenCircle.png");
  blueCircle = loadImage("./assets/img/blueCircle.png");
}
