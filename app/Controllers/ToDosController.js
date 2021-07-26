
import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { todosService } from "../Services/ToDosService.js"

function _drawAll() {
  // const todo = ProxyState.ToDos
  let template = ''
  // todo.forEach(t => template += `
  //           <span class="col-12">
  //               <input type="checkbox" name="complete" value="" onclick="app.ToDosController.toggle('${this.id}')" ${this.checked? 'checked' : '' }>${this.description}
  //           </span>` )
  // NOTE this just gets it to read undefined...
  document.getElementById('todo').innerHTML = ProxyState.ToDos.Template
  
  // NOTE this is getting put to the page but pulling from the model is not working
  // document.getElementById('todo').innerHTML =
  // `
  // <span class="col-12">
  // <input type="checkbox" name="complete" >
  // ${ProxyState.ToDos}
  // This is being lame.
  // </span>  `
}


export default class ToDosController{
  constructor() {
    ProxyState.on('ToDos', _drawAll)
    this.getAllTasks()
  }
  async createTask() {
    try {
      // console.log('made it to the controller')
      event.preventDefault()
      let form = event.target
      // console.log(form)
    
      let rawTask = {
        // @ts-ignore
        description: form.description.value
        
      }
      await todosService.createTask(rawTask)
      
      // form.reset() maybe not right line
    } catch (error) {
      console.error(error)
    }
  }



  async getTask() {
  try {
    await todosService.getTask()
  } catch (error) {
    console.error(error)
  }
  }

  async getAllTasks() {
    try {
      await todosService.getAllTasks()
    } catch (error) {
      console.error(error)
    }
  }

  
}