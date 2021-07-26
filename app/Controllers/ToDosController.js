
import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/ToDosService.js"

function _draw() {
  
}


export default class ToDosController{
  constructor() {
    ProxyState.on('ToDo', _draw)
    this.getTask()
  }
  async createTask() {
    try {
      console.log('made it to the controller')
      event.preventDefault()
      let form = event.target
      console.log(form)
    
      let rawTask = {
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
  // makeTask(id) {
  //   event.preventDefault()
  //   let form = event.target
  //   let rawTask = {
  //     title: form.title.value,
  //     listId: id
  //   }

  //   console.log(id)
  //   listsService.makeTask(rawTask)
  //   // form.reset()
  // }
}