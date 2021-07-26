import { generateId } from "../Utils/GenerateId.js"

export default class ToDo{
    constructor({description, completed, _id}) {
        this.completed = completed 
        this.description = description
        this.id = _id
    }

    // get Template() {

        // return /*html*/`
        //     <span class="col-12 ">
        //         <input type="checkbox" name="complete" value="" ('${this.id}')" ${this.checked ? 'checked' : ''}>${this.description}
               
        //     </span>
        //     `
        // ? 'checked' : '' 
        // onclick="app.ToDosController.toggle
    }
// }