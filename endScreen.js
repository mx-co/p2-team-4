import { positiveEndingVideo } from "./preload.js";
import Parameter from "./classes/parameter.js";

let wut= new Parameter (30, 15, 3, 12);


export function endScreen(){
    image (positiveEndingVideo, 0, 0, 1200, 675);
    wut.display();
}

export function mouseClickedForEndScreen() {
    positiveEndingVideo.loop();
    wut.parameterAnimation();
}
