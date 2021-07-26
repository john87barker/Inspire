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

  

  async toggle(id) {
      try {
        let found = ProxyState.todos.find(t => t.id == id)
        found.completed = !found.completed
        console.log('toggle', found)
        const res = await sandbox.put('johnbarker/todos/' + id, found)
        console.log(res.data)
        ProxyState.todos = ProxyState.todos
      } catch (error) {
        console.error(error)
      }
       
     
  }

// TODO
  async removeTask(id) {
    try {
      console.log(id, 'in the service')
      const res = await sandbox.delete('johnbarker/todos/' + id)
      ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
      
    } catch (error) {
      console.error(error)
    }
  }
}


export const todosService = new ToDosService();