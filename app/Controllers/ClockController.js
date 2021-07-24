import { ProxyState } from "../AppState.js";

function _drawClock() {
 

document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
setTimeout(_drawClock, 1000)
}


 

export default class ClockController{

  constructor() {
_drawClock()
    
  }


}