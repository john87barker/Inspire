import { sandbox } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js"

class QuotesService{

  async getQuote() {
    const res = await sandbox.get('quotes')
    console.log(res.data)
    ProxyState.Quote = new Quote(res.data)
}


}


export const quotesService = new QuotesService();