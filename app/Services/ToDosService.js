import { sandbox } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js"

class ToDosService{
  async createTask(rawTask) {
    console.log('made it to the service')
    const res = await sandbox.post('/johnbarker/todos', rawTask)
    console.log(res.data)

    ProxyState.ToDo = [...ProxyState.ToDo, new ToDo(res.data)]
  }

  async getTask() {
    const res = await sandbox.get('johnbarker/todos')
  
    console.log(res.data)
  }
}


export const todosService = new ToDosService();