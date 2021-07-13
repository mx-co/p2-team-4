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
  buttonClickSound,
  blueCircle,
} from "./preload.js";

let denialCounter = 0;
let angerCounter = 0;
let bargainingCounter = 0;
let depressionCounter = 0;
let acceptanceCounter = 0;

let decisionCounter = 0;

let gameScreenState = "argument";

let answerButtonPosXLeft = 420;
let answerButtonPosXRight = 780;

let evaluationButton = new Button(
  1120,
  570,
  300,
  300,
  "Weiter",
  true,
  -20,
  -20,
  50
);

// shows all decisions
let argument = {
  textbox: new Textbox(
    "Du und dein Lieblingstüdeldü streitet euch. Es ist schon \nlänger unzufrieden mit eurer Beziehung und entscheidet sich daraufhin, \nmit dir schluss zu machen. Wie reagierst du?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich möchte über den Trennungsgrund reden.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich gehe dem Gespräch aus dem Weg.",
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
    "Nachdem dein Ex-Lieblingstüdeldü dich alleine auf dem Boot \nzurückgelassen hat überlegst du, was du tun sollst."
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich bitte meinen besten Freund, \nmich an meinem Lieblingsort zu treffen.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich fahre alleine \nzu meinem Lieblingsort.",
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
    "An deinem Lieblingsort angekommen, \nmerkst du zum ersten Mal wie einsam du dich fühlst. \nWas könnte dir jetzt weiterhelfen?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich lasse meine Gefühlen freien Lauf, \nweine und schreie sie heraus.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich sage mir, dass es nur ein kleiner Streit war \nund dass wir uns wieder vertragen können.",
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
    "Als du an deinem Lieblingsort ankommst, wartet dein Freund bereits auf dich. \nEr fragt dich was los ist. Was antwortest du darauf?"
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
    "Zurück daheim bist du vor Erschöpfung direkt eingeschlafen. \nAm nächsten Morgen erwachst du zum ersten Mal ohne dein Lieblingstüdeldü. \nWie möchtest du in den Tag starten?"
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
  textbox: new Textbox(
    "Du schmaust gerade dein Lieblingsfrühstück als dein Läutling klingelt. Gehst du ran?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich lehne ab und gehe zurück ins Blättchen.",
    true
  ),
  RightButton: new AnswerButton(answerButtonPosXRight, "Ich nehme an.", true),
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
    "Du rollst alleine im Blättchen herum und \nnimmst deinen Läutiling zur Hand. Was möchtest du tun?"
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
    "Dein Ex-Lieblings-Tüdelü postet ein Bild von sich auf Fairygramm. \nWie reagierst du darauf?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich drücke auf entfolgen.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich schließe Fairygram.",
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
    "Du legst dein Läuteling zur Seite. \nTrauer und Einsamkeit überkommt dich. \nWie gehst du damit um?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich nehme das Läuteling wieder zur Hand \nund lenke mich mit anderen Sozialen Medien ab.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich stehe auf \nund räume mein Zimmer auf.",
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
    "Dein bester Freund ist am Apparat und schlägt vor, etwas zu unternehmen. Worauf hast du Lust? \netwas zu unternehmen, worauf du Lust hast?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich schlage vor einen \nentspannten Filmabend zu machen.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich schlage vor \nauf den Lichtball zu gehen.",
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
    "Du verbringst bisher einen entspannten Abend mit deinen engsten Freunden \nals einer deiner Freunde dich auf deinen Ex-Lieblingstüdeldü anspricht. \nWas machst du ?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich entscheide mich, meinen Freunden von \nder Trennung zu erzählen.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich gehe dem Gespräch aus dem Weg und \nsage nur dass es ihm gut geht.",
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
  textbox: new Textbox("Was möchtest du deinen Freunden erzählen?"),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich gebe zu, dass ich \nmein Lieblings-Tüdeldü vermisse.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich beschwere mich über \nmein Ex-Lieblings-Tüdeldü.",
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
    "Nach einigen Tänzen auf dem Lichterball bieten deine Freunde \ndir an etwa smit ihnen zu trinken. Nimmst du an?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ja.Der Alkohol wird mir helfen Spaß zu haben.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich hole mir lieber einen Blütensaft an der Theke.",
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
    "An der Theke spricht dich ein attraktives Tüdeldü an. \nWie verhälst du dich?"
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
    "Ihr beiden versteht euch wirklich gut. Das Tüdeldü \nlädt dich zum Tanz ein und fragt anschließend nach \ndeiner Nummer. Was sagst du dazu?"
  ),

  LeftButton: new AnswerButton(
    answerButtonPosXLeft,
    "Ich lehne ab, weil ich an \nmeinen Ex-Lieblingstüdeldü denken muss.",
    true
  ),
  RightButton: new AnswerButton(
    answerButtonPosXRight,
    "Ich gehe darauf ein. \nMal sehen wohin es uns führt.",
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
let positives = {
  cleanUp: new ThinkingText(
    "Ich fühle mich wohl in meinem Zimmer. \nAußerdem hatte ich beim Aufräumen Zeit zum Nachdenken."
  ),
  evenningHope: new ThinkingText(
    "Abends liege ich im Bett und denke über \nden schönen Abend nach. Ich bin immer noch ein \nwenig traurig aber auch hoffnungsvoll."
  ),
  badSideGoodEffect: new ThinkingText(
    "Ich sehe ein, dass es auch schlechte Seiten \nan meiner Beziehung gab und die Trennung somit \nauch positive Auswirkungen hat."
  ),
  goodNewChance: new ThinkingText(
    "Ich genieße die Zeit mit meinen Freunden und \nfühle mich nicht mehr so alleine."
  ),
};
let negatives = {
  emptiness: new ThinkingText(
    "Sobald ich mein Läutling weglege, \nspüre ich die Leere in mir. \nMein Verhalten hat mir gar nicht geholfen."
  ),
  missOldTime: new ThinkingText(
    "Abends sitze ich wieder alleine in meinem Bett, \nvermisse mein Ex-Lieblingstüdeldü und \nwünsche die alte Zeit zurück"
  ),
  painfulFeelings: new ThinkingText(
    "Es hat gut getan über meine Gefühle zu sprechen. \nTrotzdem schmerzt mich der Verlust \nvon meinem Ex-Lieblingstüdeldü."
  ),
  badNewChance: new ThinkingText(
    "Während dem Film muss ich an \nmein Ex-Lieblingstüdeldü denken. \nVielleicht gibt es noch eine Chance für uns."
  ),
  drained: new ThinkingText(
    "Ich wache am nächsten Morgen auf und \nfühle mich körperlich und psychisch ausgelaugt. \nDer Alkohol war nur eine kurze Freude."
  ),
};

function positivePreEndScreen() {
  push();
  image(positiveThinkingImg, 0, 0, 1200, 675);
  evaluationButton.display(averiaSansLibreBold, blueCircle, 0.45);

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
  evaluationButton.display(averiaSansLibreBold, blueCircle, 0.45);

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
  // console.log(gameScreenState);
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
      buttonClickSound.play();
      decisionCounter += 1;
    }
    if (argument.LeftButton.hitTestCustom()) {
      acceptanceCounter += 1;
      bargainingCounter += 1;
    } else if (argument.RightButton.hitTestCustom()) {
      denialCounter += 1;
    }
  } else if (gameScreenState === "aloneInBoat") {
    if (aloneInBoat.LeftButton.hitTestCustom()) {
      gameScreenState = "togetherAtFavouritePlace";
      togetherAtFavouritePlaceVideo.loop();
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
    } else if (aloneInBoat.RightButton.hitTestCustom()) {
      gameScreenState = "aloneAtFavouritePlace";
      aloneAtFavouritePlaceVideo.loop();
      buttonClickSound.play();
      depressionCounter += 1;
      denialCounter += 1;
      decisionCounter += 1;
    }
  } else if (gameScreenState === "aloneAtFavouritePlace") {
    if (
      aloneAtFavouritePlace.LeftButton.hitTestCustom() ||
      aloneAtFavouritePlace.RightButton.hitTestCustom()
    ) {
      gameScreenState = "sunrise";
      sunriseVideo.play();
      buttonClickSound.play();
      decisionCounter += 1;
    }
    if (aloneAtFavouritePlace.LeftButton.hitTestCustom()) {
      acceptanceCounter += 1;
      angerCounter += 1;
      depressionCounter += 1;
    } else if (aloneAtFavouritePlace.RightButton.hitTestCustom()) {
      bargainingCounter += 1;
    }
  } else if (gameScreenState === "togetherAtFavouritePlace") {
    if (
      togetherAtFavouritePlace.LeftButton.hitTestCustom() ||
      togetherAtFavouritePlace.RightButton.hitTestCustom()
    ) {
      gameScreenState = "sunrise";
      sunriseVideo.play();
      buttonClickSound.play();
      decisionCounter += 1;
    }
    if (togetherAtFavouritePlace.LeftButton.hitTestCustom()) {
      angerCounter += 1;
      depressionCounter += 1;
      acceptanceCounter += 1;
    } else if (togetherAtFavouritePlace.RightButton.hitTestCustom()) {
      denialCounter += 1;
    }
  } else if (gameScreenState === "sunrise") {
    if (sunrise.LeftButton.hitTestCustom()) {
      gameScreenState = "aloneInBed";
      aloneInBedVideo.loop();
      buttonClickSound.play();
      depressionCounter += 1;
      denialCounter += 1;
      decisionCounter += 1;
    } else if (sunrise.RightButton.hitTestCustom()) {
      gameScreenState = "kitchen";
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
    }
  } else if (gameScreenState === "kitchen") {
    if (kitchen.LeftButton.hitTestCustom()) {
      gameScreenState = "aloneInBed";
      aloneInBedVideo.loop();
      buttonClickSound.play();
      denialCounter += 1;
      depressionCounter += 1;
      decisionCounter += 1;
    } else if (kitchen.RightButton.hitTestCustom()) {
      gameScreenState = "friendIsCalling";
      friendIsCallingVideo.loop();
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
    }
  } else if (gameScreenState === "aloneInBed") {
    if (aloneInBed.LeftButton.hitTestCustom()) {
      gameScreenState = "fairygram";
      handyVideo.loop();
      buttonClickSound.play();
      depressionCounter += 1;
      bargainingCounter += 1;
      decisionCounter += 1;
    } else if (aloneInBed.RightButton.hitTestCustom()) {
      gameScreenState = "fairygram";
      handyVideo.loop();
      buttonClickSound.play();
      acceptanceCounter += 1;
      angerCounter += 1;
      decisionCounter += 1;
    }
  } else if (gameScreenState === "fairygram") {
    if (fairygram.LeftButton.hitTestCustom()) {
      gameScreenState = "sad";
      sadVideo.loop();
      buttonClickSound.play();
      acceptanceCounter += 1;
      angerCounter += 1;
      decisionCounter += 1;
    } else if (fairygram.RightButton.hitTestCustom()) {
      gameScreenState = "sad";
      sadVideo.loop();
      buttonClickSound.play();
      bargainingCounter += 1;
      decisionCounter += 1;
    }
  } else if (gameScreenState === "sad") {
    if (sad.LeftButton.hitTestCustom()) {
      gameScreenState = "cleanUp";
      buttonClickSound.play();
      denialCounter += 1;
      decisionCounter += 1;
      // end of decisions
    } else if (sad.RightButton.hitTestCustom()) {
      gameScreenState = "emptiness";
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
      // end of decisions
    }
  } else if (gameScreenState === "friendIsCalling") {
    if (friendIsCalling.LeftButton.hitTestCustom()) {
      gameScreenState = "aboutEx";
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
    } else if (friendIsCalling.RightButton.hitTestCustom()) {
      gameScreenState = "lightParty";
      lightPartyVideo.loop();
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
    }
  } else if (gameScreenState === "aboutEx") {
    if (aboutEx.LeftButton.hitTestCustom()) {
      gameScreenState = "talkAboutEx";
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
    } else if (aboutEx.RightButton.hitTestCustom()) {
      gameScreenState = "selectMovie";
      movieNightVideo.loop();
      buttonClickSound.play();
      denialCounter += 1;
      decisionCounter += 1;
    }
  } else if (gameScreenState === "talkAboutEx") {
    if (talkAboutEx.LeftButton.hitTestCustom()) {
      gameScreenState = "painfulFeelings";
      buttonClickSound.play();
      depressionCounter += 1;
      decisionCounter += 1;
      // end of decisions
    } else if (talkAboutEx.RightButton.hitTestCustom()) {
      gameScreenState = "badSideGoodEffect";
      buttonClickSound.play();
      acceptanceCounter += 1;
      angerCounter += 1;
      decisionCounter += 1;
      // end of decisions
    }
  } else if (gameScreenState === "selectMovie") {
    if (selectMovie.LeftButton.hitTestCustom()) {
      gameScreenState = "badNewChance";
      buttonClickSound.play();
      depressionCounter += 1;
      decisionCounter += 1;
      // end of decisions
    } else if (selectMovie.RightButton.hitTestCustom()) {
      gameScreenState = "goodNewChance";
      buttonClickSound.play();
      angerCounter += 1;
      decisionCounter += 1;
      // end of decisions
    }
  } else if (gameScreenState === "lightParty") {
    if (lightParty.LeftButton.hitTestCustom()) {
      gameScreenState = "drained";
      buttonClickSound.play();
      denialCounter += 1;
      depressionCounter += 1;
      decisionCounter += 1;
      // end of decisions
    } else if (lightParty.RightButton.hitTestCustom()) {
      gameScreenState = "attractive";
      talkAtLightPartyVideo.loop();
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
    }
  } else if (gameScreenState === "attractive") {
    if (attractive.LeftButton.hitTestCustom()) {
      gameScreenState = "missOldTime";
      buttonClickSound.play();
      denialCounter += 1;
      decisionCounter += 1;
      // end of decisions
    } else if (attractive.RightButton.hitTestCustom()) {
      gameScreenState = "danceAndNumber";
      dancePartyVideo.loop();
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
    }
  } else if (gameScreenState === "danceAndNumber") {
    if (danceAndNumber.LeftButton.hitTestCustom()) {
      gameScreenState = "aloneInBed";
      aloneInBedVideo.loop();
      buttonClickSound.play();
      denialCounter += 1;
      bargainingCounter += 1;
      decisionCounter += 1;
    } else if (danceAndNumber.RightButton.hitTestCustom()) {
      gameScreenState = "evenningHope";
      buttonClickSound.play();
      acceptanceCounter += 1;
      decisionCounter += 1;
      // end of decisions
    }
  } else if (
    gameScreenState == "cleanUp" ||
    gameScreenState == "evenningHope" ||
    gameScreenState == "badSideGoodEffect" ||
    gameScreenState == "goodNewChance" ||
    gameScreenState == "emptiness" ||
    gameScreenState == "missOldTime" ||
    gameScreenState == "painfulFeelings" ||
    gameScreenState == "badNewChance" ||
    gameScreenState == "drained"
  ) {
    if (evaluationButton.hitTestCircle()) {
      positiveEndingVideo.loop();
      negativeEndingVideo.loop();
      buttonClickSound.play();

      console.log(denialCounter);
      return true;
    }
  }
}

export function resetCounters() {
  gameScreenState = "argument";
  denialCounter = 0;
  angerCounter = 0;
  bargainingCounter = 0;
  depressionCounter = 0;
  acceptanceCounter = 0;
  decisionCounter = 0;
}

export function getCounters() {
  // console.log([
  //   denialCounter,
  //   angerCounter,
  //   bargainingCounter,
  //   depressionCounter,
  //   acceptanceCounter,
  //   decisionCounter,
  // ]);
  return [
    denialCounter,
    angerCounter,
    bargainingCounter,
    depressionCounter,
    acceptanceCounter,
    decisionCounter,
  ];
}
