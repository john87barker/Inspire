export default class Quote{
    constructor({content, author}) {
        this.quote = content
        this.author = author
    }

    get Template() {

        return /*html*/`
            <div class="quote text">
                <div class="author text">
                <h4> ${this.author}</h4>
                </div>
                <h5 > ${this.quote}</h5>
            </div>
        `
    }
}