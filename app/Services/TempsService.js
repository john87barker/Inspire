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

  // changeTemp() {
  //   const f =Math.floor(`(${ProxyState.Temp.temp}-273.15) * 1.8 + 32`)
  //   let c = `${ProxyState.Temp.temp}-273.15`
    
  // }

}

export const tempsService = new TempsService();