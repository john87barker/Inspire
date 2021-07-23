export default class Background {
    constructor({id, author, url, imgUrl}) {
        this.id = id
        this.author = author
        this.url = url
        this.imgUrl = imgUrl
    }

    get Template() {

        return /*html*/`
        <span class="text-dark">
           <img class="vh-100 vw-100 " src="${this.imgUrl}" alt="${this.url}"> 
        </span>
        `
    }
}
