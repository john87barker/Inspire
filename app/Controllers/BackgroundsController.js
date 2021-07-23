import { ProxyState } from "../AppState.js"
import { backgroundsService } from "../Services/BackgroundsService.js"

function _draw() {
  
  document.getElementById('bg').innerHTML = ProxyState.Background.Template
}


export default class BackgroundsController {
  constructor() {
    ProxyState.on('Background', _draw)
    this.getBG()
  }
  async getBG() {
    try {
      await backgroundsService.getBG()
    } catch (error) {
      console.error(error)
    }
  }

  






  getTime() {
    
  }
}