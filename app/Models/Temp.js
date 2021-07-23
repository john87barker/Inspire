export default class Temp{
    constructor({main, name }) {
        this.main = main.temp
        this.name = name
    }

    get Template() {

        return /*html*/`
        <div class="">
           <p> ${this.main} </p>
           <p> ${this.name} </p>
        </div>
        `
    }
}