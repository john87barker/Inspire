import { sandbox } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"
import Temp from "../Models/Temp.js"
// import Temp from "../Models/Temp"

class TempsService{
 
  async getTemp() {
    const res = await sandbox.get('weather')
    console.log(res.data)
    ProxyState.Temp = new Temp(res.data)
  }
//  NOTE doesn't work in context yet.
  toCelsius() {
    
    let c = `(${ProxyState.Temp.temp}-273.15)`

    ProxyState.Temp = c
    
  }

}

export const tempsService = new TempsService();