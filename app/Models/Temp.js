export default class Temp{
    constructor({main, name }) {
        this.celsius = Math.floor(main.temp - 273.15)
        this.farenheit = Math.floor((this.celsius * 1.8) + 32)
        this.name = name
    }
 
    get Template() {

        return /*html*/`
        <div class="text-right">
            <h3> ${this.farenheit}°F</h3>
            <h5> ${this.celsius}°C</h5>
            <h4><b> ${this.name}  </b</h4>
        </div>
        
        `
    }
}
