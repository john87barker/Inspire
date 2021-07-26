import { generateId } from "../Utils/GenerateId.js"

export default class Task{
    constructor({description, completed, id = generateId}) {
        this.checked = completed
        this.description = description
        this.id = id
    }

    get Template() {

        return /*html*/`
            <span class="col-12">
                <input type="checkbox" name="complete" value="" ('${this.id}')" ${this.checked ? 'checked' : '' }>${this.description}
            </span>
            `
        // ? 'checked' : '' 
        // onclick="app.ToDosController.toggle
    }
}