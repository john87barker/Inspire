import { sandbox } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js"

class ToDosService{
  async createTask(rawTask) {
    console.log('made it to the service')
    const res = await sandbox.post('/johnbarker/todos', rawTask)
    console.log(res.data)
// console.log(res.data.description)
    ProxyState.ToDos = [...ProxyState.ToDos, new Task(res.data)]
    
  }

  async getTask() {
    const res = await sandbox.get('johnbarker/todos')
  
    console.log(res.data.id)
    ProxyState.ToDos = ProxyState.ToDos
    // console.log(ProxyState.ToDos)

  }

  async getAllTasks() {
    const res = await sandbox.get('johnbarker/todos/')
    console.log(res.data);
    ProxyState.ToDos = res.data
    console.log(ProxyState.ToDos, "stuff")

  }

  

   toggle(id) {
    let found = ProxyState.ToDos.find(task => task.id == id)

    found.checked = !found.checked

    ProxyState.ToDos = ProxyState.ToDos

    console.log(found)
  }


  // removeTask(id) {
  //   console.log('the remove button worked a little', id)
  //   if (window.confirm('Remove the task?')) {
  //     window.close(
  //       ProxyState.ToDos = ProxyState.ToDos.filter(task => task.id != id))
  //   }
  //   console.log(id)
  // }
}


export const todosService = new ToDosService();