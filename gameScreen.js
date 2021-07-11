import AnswerButton from "./classes/answerButton.js";
import Button from "./classes/button.js";
import Textbox from "./classes/textbox.js";
import ThinkingText from "./classes/thinkingText.js";
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
  positiveThinkingImg,
  negativeThinkingImg,
  greenCircle,
  positiveEndingVideo,
  negativeEndingVideo,
} from "./preload.js";

export let denialCounter = 10;
export let angerCounter = 0;
export let bargainingCounter = 0;
export let depressionCounter = 0;
export let acceptanceCounter = 0;
let gameScreenState = "argument";

let answerButtonPosXLeft = 420;
let answerButtonPosXRight = 780;

let argument = {
  textbox: new Textbox(
    "Du und dein Lieblings-Tüdelü streitet euch. \nEs entscheidet sich daraufhin, weil es unzufrieden mit der Beziehung ist, \nmit dir schluss zu machen. \nWie reagierst du?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich möchte über den Trennungsgrund reden.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Du sitzt nun alleine und traurig aufgrund der Trennung im Bötchen \nund überlegst, was du tun sollst."
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Besten Freund kontaktieren.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "An deinem Lieblingsort angekommen, \nwirst du dir deiner Einsamkeit bewusst. Wie reagierst du darauf?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich lasse meine Gefühlen freien Lauf, \nweine und schreie sie heraus.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Du triffst dich mit deinem besten Freund an deinem Lieblingsort. \nWorüber möchtest du reden?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich rede über die Trennung und meine Gefühle.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Die Sonne geht auf, ein neuer Tag bricht an. Wie möchtest du in den Tag starte?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Im Blättchen einmummeln.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
  textbox: new Textbox("Das Frühstück war sehr lecker. Als nächste..."),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "... gehe ich zurück ins Bett.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Du rollst alleine im Bett herum und \nnimmst deinen Läutiling zur Hand. Wie entscheidest du dich?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich schaue mir alte Bilder an und \nvermisse die alten Zeiten.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Dein Ex-Lieblings-Tüdelü postet ein Bild von sich auf Fairygramm."
  ),

  LeftButton: new AnswerButton(answerButtonPosXLeft, "Entfolgen.", true),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Nicht entfolgen.",
    true
  ),
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
    "Du fühlst dich traurig und einsam. Was möchtest du jetzt tun?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Im Bett liegen bleiben und weiterhin mit Social Media ablenken.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Dein Läutling klingelt und dein bester Freund schlägt vor, \netwas zu unternehmen, worauf du Lust hast?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Einen entspannten Abend machen.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Du verbringst bisher einen entspannten Abend mit deinen engsten Freunden. \nEiner deiner Freunde spricht dich auf deinen Ex Partner an."
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich entscheide mich, meinen Freunden von der Trennung zu erzählen.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
  textbox: new Textbox("Was möchtest du deinen Freunden erzählen."),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich gebe zu, dass ich mein Lieblings-Tüdeldü sehr vermisse und \nerzähle Geschichten aus der Vergangenheit.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Deine Freunde überlassen dir die Filmauswahl. Worauf hast du Lust?"
  ),

  LeftButton: new AnswerButton(answerButtonPosXLeft, "Liebesfilm.", true),
  RightButton: new AnswerButton(answerButtonPosXRight, "Actionfilm.", true),
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
    "Du gehst mit deinen Freunden zum Lichterball. \nSie bieten dir an, etwas mit ihnen zu trinken."
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Der Alkohol wird mir helfen Spaß zu haben.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Als du dir einen Blütensaft hollen willst, spricht dich ein attraktives Tüdeldü an. Wie verhälst du dich?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich sage, dass ich mich in einer Beziehung befinde.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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
    "Ihr beiden versteht euch wirklich gut. Das Tüdeldü lädt dich zum Tanz ein und fragt anschließend nach deiner Nummer. Wie reagierst du?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich lehne ab, weil ich an mein Ex-Lieblings-Tüdeldü denken muss.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
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

// Text for positive and negative preEndScreen
let evaluationButton = new Button(
  800,
  675 / 2,
  200,
  200,
  "Weiter",
  true,
  0,
  0,
  20
);
// Text fehlt noch
let positives = {
  cleanUp: new ThinkingText("Das ist ein test fürs Aufräumen"),
  evenningHope: new ThinkingText("Das ist Abend mit"),
  badSideGoodEffect: new ThinkingText("sda"),
  goodNewChance: new ThinkingText("sdfs"),
};

let negatives = {
  emptiness: new ThinkingText("sdfsdf"),
  missOldTime: new ThinkingText("sdfsghfd"),
  painfulFeelings: new ThinkingText("ffgkdj"),
  badNewChance: new ThinkingText("sdfs"),
  drained: new ThinkingText("ausgelaugt"),
};

function positivePreEndScreen() {
  push();
  image(positiveThinkingImg, 0, 0, 1200, 675);
  evaluationButton.display(averiaSansLibreBold, greenCircle, 0.3);

  if (gameScreenState === "cleanUp") {
    positives.cleanUp.display(averiaSansLibreRegular);
  } else if (gameScreenState === "evenningHope") {
    positives.evenningHope.display(averiaSansLibreRegular);
  } else if (gameScreenState === "badSideGoodEffect") {
    positives.badSideGoodEffect.display(averiaSansLibreRegular);
  } else if (gameScreenState === "goodNewChance") {
    positives.goodNewChance.display(averiaSansLibreRegular);
  }

  pop();
}

function negativePreEndScreen() {
  push();
  image(negativeThinkingImg, 0, 0, 1200, 675);
  evaluationButton.display(averiaSansLibreBold, greenCircle, 0.3);

  if (gameScreenState === "emptiness") {
    negatives.emptiness.display(averiaSansLibreRegular);
  } else if (gameScreenState === "missOldTime") {
    negatives.missOldTime.display(averiaSansLibreRegular);
  } else if (gameScreenState === "painfulFeelings") {
    negatives.painfulFeelings.display(averiaSansLibreRegular);
  } else if (gameScreenState === "badNewChance") {
    negatives.badNewChance.display(averiaSansLibreRegular);
  } else if (gameScreenState === "drained")
    negatives.drained.display(averiaSansLibreRegular);
  pop();
}

export function gameScreen() {
  console.log(gameScreenState);
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
  } else if (
    gameScreenState == "cleanUp" ||
    gameScreenState == "evenningHope" ||
    gameScreenState == "badSideGoodEffect" ||
    gameScreenState == "goodNewChance"
  ) {
    positivePreEndScreen();
  } else if (
    gameScreenState == "emptiness" ||
    gameScreenState == "missOldTime" ||
    gameScreenState == "painfulFeelings" ||
    gameScreenState == "badNewChance" ||
    gameScreenState === "drained"
  ) {
    negativePreEndScreen();
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
      sadVideo.loop();
    }
  } else if (gameScreenState === "sad") {
    if (sad.LeftButton.hitTestCustom()) {
      gameScreenState = "cleanUp";
      // end aswertung
    } else if (sad.RightButton.hitTestCustom()) {
      gameScreenState = "emptiness";
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
      gameScreenState = "painfulFeelings";
      // end
    } else if (talkAboutEx.RightButton.hitTestCustom()) {
      gameScreenState = "badSideGoodEffect";
      // end
    }
  } else if (gameScreenState === "selectMovie") {
    if (selectMovie.LeftButton.hitTestCustom()) {
      gameScreenState = "badNewChance";
      // auswertung
    } else if (selectMovie.RightButton.hitTestCustom()) {
      gameScreenState = "goodNewChance";
      // auswertung
    }
  } else if (gameScreenState === "lightParty") {
    if (lightParty.LeftButton.hitTestCustom()) {
      gameScreenState = "drained";
      // end Auswertung
    } else if (lightParty.RightButton.hitTestCustom()) {
      gameScreenState = "attractive";
      talkAtLightPartyVideo.loop();
    }
  } else if (gameScreenState === "attractive") {
    if (attractive.LeftButton.hitTestCustom()) {
      gameScreenState = "missOldTime";
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
      gameScreenState = "evenningHope";
      // Auswertung
    }
  } else if (
    gameScreenState == "cleanUp" ||
    gameScreenState == "evenningHope" ||
    gameScreenState == "badSideGoodEffect" ||
    gameScreenState == "goodNewChance" ||
    gameScreenState == "emptiness" ||
    gameScreenState == "missOldTime" ||
    gameScreenState == "painfulFeelings" ||
    gameScreenState == "badNewChance"
  ) {
    if (evaluationButton.hitTestCircle()) {
      positiveEndingVideo.loop();
      negativeEndingVideo.loop();
      return true;
    }
  }
  // startet woanderst nicht gleichzeitig mit Text
  // argumentVideo.loop();
}

export function resetCounters() {
  gameScreenState = "argument";
  denialCounter = 0;
  angerCounter = 0;
  bargainingCounter = 0;
  depressionCounter = 0;
  acceptanceCounter = 0;
}
