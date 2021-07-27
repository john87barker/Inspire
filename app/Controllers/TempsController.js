import { tempsService } from "../Services/TempsService.js"
import { ProxyState } from "../AppState.js"

function _draw() {
  document.getElementById('temp').innerHTML = ProxyState.Temp.Template
}

export default class TempsController {
  constructor() {
    ProxyState.on('Temp', _draw)
    this.getTemp()
  }

  async getTemp() {
    try {
      await tempsService.getTemp()
    } catch (error) {
      console.error(error)
    }
  }

  // toggleTemp() {
  //   tempsService.toggleTemp()
  // }

}