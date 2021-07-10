import AnswerButton from "./classes/answerButton.js";
import Textbox from "./classes/textbox.js";
import {
  averiaSansLibreBold,
  averiaSansLibreRegular,
  argumentVideo,
  aloneInBoatVideo,
  aloneInBedVideo,
  sunriseVideo,
  aloneAtFavouritePlaceVideo,
  togetherAtFavouritePlaceVideo,
  movieNightVideo,
  friendIsCallingVideo,
  kitchenImg,
  aboutExImg,
  talkAboutExImg,
  handyVideo,
  sadVideo,
  lightPartyVideo,
  talkAtLightPartyVideo,
  dancePartyVideo,
} from "./preload.js";

let gameScreenState = "argument";

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
  push();
  image(togetherAtFavouritePlaceVideo, 0, 0, 1200, 675);
  togetherAtFavouritePlace.textbox.display(averiaSansLibreBold);
  togetherAtFavouritePlace.LeftButton.display(averiaSansLibreRegular);
  togetherAtFavouritePlace.RightButton.display(averiaSansLibreRegular);
  pop();
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

let kitchen = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Das Frühstück war sehr lecker. Als nächste..."
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "... gehe ich zurück ins Bett.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "... suche ich mir eine Beschäftigung.",
    true
  ),
};
function kitchenScreen() {
  push();
  image(kitchenImg, 0, 0, 1200, 675);
  kitchen.textbox.display(averiaSansLibreBold);
  kitchen.LeftButton.display(averiaSansLibreRegular);
  kitchen.RightButton.display(averiaSansLibreRegular);
  pop();
}

let aloneInBed = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Du rollst alleine im Bett herum und \nnimmst deinen Läutiling zur Hand. Wie entscheidest du dich?"
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Ich schaue mir alte Bilder an und \nvermisse die alten Zeiten.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Ich lösche alte Bilder \nvon meinem Ex-Lieblingstüdeldu.",
    true
  ),
};
function aloneInBedScreen() {
  push();
  image(aloneInBedVideo, 0, 0, 1200, 675);
  aloneInBed.textbox.display(averiaSansLibreBold);
  aloneInBed.LeftButton.display(averiaSansLibreRegular);
  aloneInBed.RightButton.display(averiaSansLibreRegular);

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
  image(handyVideo, 0, 0, 1200, 675);
  fairygram.textbox.display(averiaSansLibreBold);
  fairygram.LeftButton.display(averiaSansLibreRegular);
  fairygram.RightButton.display(averiaSansLibreRegular);

  pop();
}

let sad = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Du fühlst dich traurig und einsam. Was möchtest du jetzt tun?"
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Im Bett liegen bleiben und weiterhin mit Social Media ablenken.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Aufstehen und Zimmer aufräumen.",
    true
  ),
};
function sadScreen() {
  push();
  image(sadVideo, 0, 0, 1200, 675);
  sad.textbox.display(averiaSansLibreBold);
  sad.LeftButton.display(averiaSansLibreRegular);
  sad.RightButton.display(averiaSansLibreRegular);
  pop();
}

let friendIsCalling = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Dein Läutling klingelt und dein bester Freund schlägt vor, \netwas zu unternehmen, worauf du Lust hast?"
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Einen entspannten Abend machen.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Auf eine Party gehen.",
    true
  ),
};
function friendIsCallingScreen() {
  push();
  image(friendIsCallingVideo, 0, 0, 1200, 675);
  friendIsCalling.textbox.display(averiaSansLibreBold);
  friendIsCalling.LeftButton.display(averiaSansLibreRegular);
  friendIsCalling.RightButton.display(averiaSansLibreRegular);
  pop();
}

let aboutEx = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Du verbringst bisher einen entspannten Abend mit deinen engsten Freunden. \nEiner deiner Freunde spricht dich auf deinen Ex Partner an."
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Ich entscheide mich, meinen Freunden von der Trennung zu erzählen.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Ich gehe dem Gespräch aus dem Weg.",
    true
  ),
};
function aboutExScreen() {
  push();
  image(aboutExImg, 0, 0, 1200, 675);
  aboutEx.textbox.display(averiaSansLibreBold);
  aboutEx.LeftButton.display(averiaSansLibreRegular);
  aboutEx.RightButton.display(averiaSansLibreRegular);
  pop();
}

let talkAboutEx = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Was möchtest du deinen Freunden erzählen."
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Ich gebe zu, dass ich mein Lieblings-Tüdeldü sehr vermisse und \nerzähle Geschichten aus der Vergangenheit.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Ich beschwere mich über mein Ex-Lieblings-Tüdeldü.",
    true
  ),
};
function talkAboutExScreen() {
  push();
  image(talkAboutExImg, 0, 0, 1200, 675);
  talkAboutEx.textbox.display(averiaSansLibreBold);
  talkAboutEx.LeftButton.display(averiaSansLibreRegular);
  talkAboutEx.RightButton.display(averiaSansLibreRegular);
  pop();
}

let selectMovie = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Deine Freunde überlassen dir die Filmauswahl. Worauf hast du Lust?"
  ),

  LeftButton: new AnswerButton(420, 620, 300, 50, "Liebesfilm.", true),
  RightButton: new AnswerButton(780, 620, 300, 50, "Actionfilm.", true),
};
function selectMovieScreen() {
  push();
  image(movieNightVideo, 0, 0, 1200, 675);
  selectMovie.textbox.display(averiaSansLibreBold);
  selectMovie.LeftButton.display(averiaSansLibreRegular);
  selectMovie.RightButton.display(averiaSansLibreRegular);
  pop();
}

let lightParty = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Du gehst mit deinen Freunden zum Lichterball. \nSie bieten dir an, etwas mit ihnen zu trinken."
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Der Alkohol wird mir helfen Spaß zu haben.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Ich hole mir lieber Blütensaft an der Theke.",
    true
  ),
};
function lightPartyScreen() {
  push();
  image(lightPartyVideo, 0, 0, 1200, 675);
  lightParty.textbox.display(averiaSansLibreBold);
  lightParty.LeftButton.display(averiaSansLibreRegular);
  lightParty.RightButton.display(averiaSansLibreRegular);
  pop();
}

let attractive = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Als du dir einen Blütensaft hollen willst, spricht dich ein attraktives Tüdeldü an. Wie verhälst du dich?"
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Ich sage, dass ich mich in einer Beziehung befinde.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Ich lass mich auf das Gespräch ein.",
    true
  ),
};
function attractiveScreen() {
  push();
  image(talkAtLightPartyVideo, 0, 0, 1200, 675);
  attractive.textbox.display(averiaSansLibreBold);
  attractive.LeftButton.display(averiaSansLibreRegular);
  attractive.RightButton.display(averiaSansLibreRegular);
  pop();
}

let danceAndNumber = {
  textbox: new Textbox(
    600,
    530,
    600,
    100,
    "Ihr beiden versteht euch wirklich gut. Das Tüdeldü lädt dich zum Tanz ein und fragt anschließend nach deiner Nummer. Wie reagierst du?"
  ),

  LeftButton: new AnswerButton(
    420,
    620,
    300,
    50,
    "Ich lehne ab, weil ich an mein Ex-Lieblings-Tüdeldü denken muss.",
    true
  ),
  RightButton: new AnswerButton(
    780,
    620,
    300,
    50,
    "Ich nehme an. Mal sehen, wohin es uns führt.",
    true
  ),
};
function danceAndNumberScreen() {
  push();
  image(dancePartyVideo, 0, 0, 1200, 675);
  danceAndNumber.textbox.display(averiaSansLibreBold);
  danceAndNumber.LeftButton.display(averiaSansLibreRegular);
  danceAndNumber.RightButton.display(averiaSansLibreRegular);
  pop();
}

export function gameScreen() {
  push();

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
  } else if (gameScreenState === "kitchen") {
    kitchenScreen();
  } else if (gameScreenState === "fairygram") {
    fairygramScreen();
  } else if (gameScreenState === "sad") {
    sadScreen();
  } else if (gameScreenState === "friendIsCalling") {
    friendIsCallingScreen();
  } else if (gameScreenState === "aboutEx") {
    aboutExScreen();
  } else if (gameScreenState === "talkAboutEx") {
    talkAboutExScreen();
  } else if (gameScreenState === "selectMovie") {
    selectMovieScreen();
  } else if (gameScreenState === "lightParty") {
    lightPartyScreen();
  } else if (gameScreenState === "attractive") {
    attractiveScreen();
  } else if (gameScreenState === "danceAndNumber") {
    danceAndNumberScreen();
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
    } else if (sunrise.RightButton.hitTestCustom()) {
      gameScreenState = "kitchen";
    }
  } else if (gameScreenState === "kitchen") {
    if (kitchen.LeftButton.hitTestCustom()) {
      gameScreenState = "aloneInBed";
      aloneInBedVideo.loop();
    } else if (kitchen.RightButton.hitTestCustom()) {
      gameScreenState = "friendIsCalling";
      friendIsCallingVideo.loop();
    }
  } else if (gameScreenState === "aloneInBed") {
    if (aloneInBed.LeftButton.hitTestCustom()) {
      gameScreenState = "fairygram";
      handyVideo.loop();
    } else if (aloneInBed.RightButton.hitTestCustom()) {
      gameScreenState = "fairygram";
      handyVideo.loop();
    }
  } else if (gameScreenState === "fairygram") {
    if (fairygram.LeftButton.hitTestCustom()) {
      gameScreenState = "sad";
      sadVideo.loop();
    } else if (fairygram.RightButton.hitTestCustom()) {
      gameScreenState = "sad";
      sad.loop();
    }
  } else if (gameScreenState === "sad") {
    if (sad.LeftButton.hitTestCustom()) {
      // end aswertung
    } else if (sad.RightButton.hitTestCustom()) {
      // end Auswetung
    }
  } else if (gameScreenState === "friendIsCalling") {
    if (friendIsCalling.LeftButton.hitTestCustom()) {
      gameScreenState = "aboutEx";
    } else if (friendIsCalling.RightButton.hitTestCustom()) {
      gameScreenState = "lightParty";
      lightPartyVideo.loop();
    }
  } else if (gameScreenState === "aboutEx") {
    if (aboutEx.LeftButton.hitTestCustom()) {
      gameScreenState = "talkAboutEx";
    } else if (aboutEx.RightButton.hitTestCustom()) {
      gameScreenState = "selectMovie";
      movieNightVideo.loop();
    }
  } else if (gameScreenState === "talkAboutEx") {
    if (talkAboutEx.LeftButton.hitTestCustom()) {
      // end
    } else if (talkAboutEx.RightButton.hitTestCustom()) {
      // end
    }
  } else if (gameScreenState === "selectMovie") {
    if (selectMovie.LeftButton.hitTestCustom()) {
      // auswertung
    } else if (selectMovie.RightButton.hitTestCustom()) {
      // auswertung
    }
  } else if (gameScreenState === "lightParty") {
    if (lightParty.LeftButton.hitTestCustom()) {
      // end Auswertung
    } else if (lightParty.RightButton.hitTestCustom()) {
      gameScreenState = "attractive";
      talkAtLightPartyVideo.loop();
    }
  } else if (gameScreenState === "attractive") {
    if (attractive.LeftButton.hitTestCustom()) {
      // Auswertung
    } else if (attractive.RightButton.hitTestCustom()) {
      gameScreenState = "danceAndNumber";
      dancePartyVideo.loop();
    }
  } else if (gameScreenState === "danceAndNumber") {
    if (danceAndNumber.LeftButton.hitTestCustom()) {
      gameScreenState = "aloneInBed";
      aloneInBedVideo.loop();
    } else if (danceAndNumber.RightButton.hitTestCustom()) {
      // Auswertung
    }
  }
  //   muss wo anderst gestartet werden (wenn screenState="game" wird)
  argumentVideo.loop();
}
