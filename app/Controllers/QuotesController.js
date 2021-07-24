import { quotesService } from "../Services/QuotesService.js";
import { ProxyState } from "../AppState.js";

function _draw() {
  document.getElementById('quote').innerHTML = ProxyState.Quote.Template
}


export default class QuotesController{
  constructor() {
    ProxyState.on('Quote', _draw)
    
    this.getQuote()
  }
  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }
}