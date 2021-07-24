export default class Temp{
    constructor({main, name }) {
        this.temp = main.temp
        this.name = name
    }

    get Template() {

        return /*html*/`
        <div class="text-right">
           <h3> ${this.temp} °K</h3>
           <h4><b> ${this.name}  </b</h4>
        </div>
        `
    }
}