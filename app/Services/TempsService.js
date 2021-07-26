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
  toggleTemp() {
    let c = ProxyState.Temp.celsius
    let f = ProxyState.Temp.farenheit

    // c = (c == )

    // if (c) {
    //   document.getElementById('farenheit').innerText = ProxyState.Temp.farenheit
    //   document.getElementById('celsius').innerText = ''
    // }
    // if (f) {
    //   document.getElementById('celsius').innerText = ProxyState.Temp.farenheit
    //   document.getElementById('farenheit').innerText = ''
    // }
// NOTE totally stole this to try it cause I'm getting tired but it doesn't keep my button on it with the template I also stole...
    var x = document.getElementById(`temp`);
  if (x.innerHTML === `${ProxyState.Temp.farenheit}`) {
    x.innerHTML =`${ProxyState.Temp.celsius}`;
  } else {
    x.innerHTML = `${ProxyState.Temp.farenheit}`;
  }

  }
}

export const tempsService = new TempsService();