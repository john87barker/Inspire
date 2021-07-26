import { sandbox } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js"

class ToDosService{
  async createTask(rawTask) {
    console.log('made it to the service')
    const res = await sandbox.post('/johnbarker/todos', rawTask)
    console.log(res.data)
// console.log(res.data.description)
    ProxyState.todos = [...ProxyState.todos, new ToDo(res.data)]
    // console.log('it made it through the create task method', ProxyState.todos)

    
    
  }
// NOTE this is useless right now since the get all tasks gets them all but I kept it because it was the first one and it was nice to me.
  async getTask() {
    const res = await sandbox.get('johnbarker/todos')
  
    console.log(res.data.id)
    ProxyState.todos = ProxyState.todos
    // console.log(ProxyState.ToDos)

  }

  async getAllTasks() {
    const res = await sandbox.get('johnbarker/todos/')
    console.log(res.data);
    ProxyState.todos = res.data
    ProxyState.todos = res.data.map(t => new ToDo(t))
    console.log(ProxyState.todos, "stuff")
  }

  

   toggle(id) {
    let found = ProxyState.todos.find(task => task.id == id)

    found.checked = !found.checked

    ProxyState.todos = ProxyState.todos

    console.log(found)
  }


  async removeTask(id) {
    const res = await sandbox.delete(ProxyState.todos.id)
  }
}


export const todosService = new ToDosService();