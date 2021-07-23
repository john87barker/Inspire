import { ProxyState } from "../AppState.js";
import Background from "../Models/Background.js"
import { sandbox } from "./AxiosService.js"


class BackgroundsService{
  
  async getBG() {
    const res = await sandbox.get('images')
    console.log(res.data)
    ProxyState.Background = new Background(res.data)
}

}




export const backgroundsService = new BackgroundsService();