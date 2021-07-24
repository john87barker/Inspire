export default class Quote{
    constructor({content, author}) {
        this.content = content
        this.author = author
    }

    get Template() {

        return /*html*/`
        
           <h4> ${this.content}</h4>
           <h5> ${this.author}</h5>
        
        `
    }
}