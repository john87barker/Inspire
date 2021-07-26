export default class Temp{
    constructor({main, name }) {
        this.temp = main.temp
        this.name = name
    }
 
    get Template() {

        return /*html*/`
        <div class="text-right">
           <h3 onclick="app.TempsController.toCelsius()"> ${this.temp} °</h3>
           <h4><b> ${this.name}  </b</h4>
        </div>
        `
    }
}

// ((valNum-273.15)*1.8)+32;