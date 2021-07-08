import AnswerButton from "./classes/answerButton.js";
import Textbox from "./classes/textbox.js";
import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  aloneInBoatVideo,
  argumentVideo,
  sunriseVideo,
  aloneInBedVideo,
  handyImg,
  aloneAtFavouritePlaceVideo,
  togetherAtFavouritePlaceVideo,
} from "./preload.js";

let gameScreenState = "aloneInBoat";

let argument = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Du und dein Lieblings-Tüdelü streitet euch. \nEs entscheidet sich daraufhin, weil es unzufrieden mit der Beziehung ist, \nmit dir schluss zu machen. \nWie reagierst du?"
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Ich möchte über den Trennungsgrund reden.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Ich ergreife so schnell wie möglich die Flucht.",
    true
  ),
};

function argumentScreen() {
  push();

  image(argumentVideo, 0, 0, 1200, 675);

  argument.textbox.display(averiaSansLibreBold);
  argument.LeftButton.display(averiaSansLibreRegular);
  argument.RightButton.display(averiaSansLibreRegular);

  pop();
}

let aloneInBoat = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Du sitzt nun alleine und traurig aufgrund der Trennung im Bötchen \nund überlegst, was du tun sollst."
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Besten Freund kontaktieren.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Alleine zum Lieblingsort fahren.",
    true
  ),
};
function aloneInBoatScreen() {
  push();
  image(aloneInBoatVideo, 0, 0, 1200, 675);

  aloneInBoat.textbox.display(averiaSansLibreBold);
  aloneInBoat.LeftButton.display(averiaSansLibreRegular);
  aloneInBoat.RightButton.display(averiaSansLibreRegular);
  pop();
}

let aloneAtFavouritePlace = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "An deinem Lieblingsort angekommen, \nwirst du dir deiner Einsamkeit bewusst. Wie reagierst du darauf?"
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Ich lasse meine Gefühlen freien Lauf, \nweine und schreie sie heraus.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Ich sage mir, dass es nur ein kleiner Streit war \nund das wir uns wieder vertragen können.",
    true
  ),
};
function aloneAtFavouritePlaceScreen() {
  push();
  image(aloneAtFavouritePlaceVideo, 0, 0, 1200, 675);
  aloneAtFavouritePlace.textbox.display(averiaSansLibreBold);
  aloneAtFavouritePlace.LeftButton.display(averiaSansLibreRegular);
  aloneAtFavouritePlace.RightButton.display(averiaSansLibreRegular);

  pop();
}

let togetherAtFavouritePlace = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Du triffst dich mit deinem besten Freund an deinem Lieblingsort. \nWorüber möchtest du reden?"
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Ich rede über die Trennung und meine Gefühle.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Ich rede über etwas anderes.",
    true
  ),
};
function togetherAtFavouritePlaceScreen() {
  image(togetherAtFavouritePlaceVideo, 0, 0, 1200, 675);
  togetherAtFavouritePlace.textbox.display(averiaSansLibreBold);
  togetherAtFavouritePlace.LeftButton.display(averiaSansLibreRegular);
  togetherAtFavouritePlace.RightButton.display(averiaSansLibreRegular);
}

let sunrise = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Die Sonne geht auf, ein neuer Tag bricht an. Wie möchtest du in den Tag starte?"
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Im Blättchen einmummeln.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Etwas in der Küche schmausen.",
    true
  ),
};
function sunriseScreen() {
  push();

  image(sunriseVideo, 0, 0, 1200, 675);
  sunrise.textbox.display(averiaSansLibreBold);
  sunrise.LeftButton.display(averiaSansLibreRegular);
  sunrise.RightButton.display(averiaSansLibreRegular);
  pop();
}

function kitchenScreen() {}

function aloneInBedScreen() {
  push();
  image(aloneInBedVideo, 0, 0, 1200, 675);

  pop();
}

let fairygram = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Dein Ex-Lieblings-Tüdelü postet ein Bild von sich auf Fairygramm."
  ),

  LeftButton: new AnswerButton(420, 620, 300, 50, "Entfolgen.", true),
  RightButton: new AnswerButton(780, 620, 300, 50, "Nicht entfolgen.", true),
};

function fairygramScreen() {
  push();

  image(handyImg, 0, 0, 1200, 675);
  fairygram.textbox.display(averiaSansLibreBold);
  fairygram.LeftButton.display(averiaSansLibreRegular);
  fairygram.RightButton.display(averiaSansLibreRegular);

  pop();
}

export function gameScreen() {
  push();
  // background(100, 130, 230);

  if (gameScreenState === "argument") {
    argumentScreen();
  } else if (gameScreenState === "aloneInBoat") {
    aloneInBoatScreen();
  } else if (gameScreenState === "aloneAtFavouritePlace") {
    aloneAtFavouritePlaceScreen();
  } else if (gameScreenState === "togetherAtFavouritePlace") {
    togetherAtFavouritePlaceScreen();
  } else if (gameScreenState === "sunrise") {
    sunriseScreen();
  } else if (gameScreenState === "aloneInBed") {
    aloneInBedScreen();
  } else if (gameScreenState === "fairygram") {
    fairygramScreen();
  }

  pop();
}

export function mouseClickedForGameScreen() {
  if (gameScreenState === "argument") {
    if (
      argument.LeftButton.hitTestCustom() ||
      argument.RightButton.hitTestCustom()
    ) {
      gameScreenState = "aloneInBoat";
      aloneInBoatVideo.loop();
    }
  } else if (gameScreenState === "aloneInBoat") {
    if (aloneInBoat.LeftButton.hitTestCustom()) {
      gameScreenState = "togetherAtFavouritePlace";
      togetherAtFavouritePlaceVideo.loop();
    } else if (aloneInBoat.RightButton.hitTestCustom()) {
      gameScreenState = "aloneAtFavouritePlace";
      aloneAtFavouritePlaceVideo.loop();
    }
  } else if (gameScreenState === "aloneAtFavouritePlace") {
    if (
      aloneAtFavouritePlace.LeftButton.hitTestCustom() ||
      aloneAtFavouritePlace.RightButton.hitTestCustom()
    ) {
      gameScreenState = "sunrise";
      sunriseVideo.play();
    }
  } else if (gameScreenState === "togetherAtFavouritePlace") {
    if (
      togetherAtFavouritePlace.LeftButton.hitTestCustom() ||
      togetherAtFavouritePlace.RightButton.hitTestCustom()
    ) {
      gameScreenState = "sunrise";
      sunriseVideo.play();
    }
  } else if (gameScreenState === "sunrise") {
    if (sunrise.LeftButton.hitTestCustom()) {
      gameScreenState = "aloneInBed";
      aloneInBedVideo.loop();
    }
  }

  //   muss wo anderst gestartet werden (wenn screenState="game" wird)
  argumentVideo.loop();
}
