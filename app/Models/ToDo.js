import { generateId } from "../Utils/GenerateId.js"

export default class ToDo{
    constructor({completed, id = generateId, description}) {
        this.checked = completed
        this.description = description
        this.id = id
    }

    get Template() {

        return /*html*/`
        <span class="col-12">
            <input type="checkbox" name="complete" value="" onclick="app.ToDosController.toggle('${this.id}')" ${this.checked? 'checked' : '' }>${this.description}
        </span>
        `
    }
}