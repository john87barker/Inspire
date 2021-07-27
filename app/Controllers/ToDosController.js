
import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/ToDosService.js"

function _drawAll() {
  const todo = ProxyState.todos
  let template = ''
  todo.forEach(t => template += `
            <ul class="col-12 text-left p-0">
              <input type="checkbox" name="complete" value="checkedValue" onclick="app.todosController.toggle('${t.id}')" ${t.completed ? 'checked' : ''}><b>${t.description} </b><button type="button" class="btn btn-danger btn-sm" onclick="app.todosController.removeTask('${t.id}')">x</button>
            </ul>` )
  document.getElementById('todo').innerHTML = template
}


export default class ToDosController {
  constructor() {
    ProxyState.on('todos', _drawAll)
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
      // @ts-ignore
      form.reset()

    } catch (error) {
      console.error(error)
    }
    // maybe not right line
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

  async removeTask(id) {
    try {
      console.log(id, 'in controller')
      await todosService.removeTask(id)
    } catch (error) {
      console.error(error)
    }
  }

  async toggle(id) {
    todosService.toggle(id)

  }

}