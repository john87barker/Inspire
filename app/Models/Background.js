export default class Background {
    constructor({id, author, url, imgUrl}) {
        this.id = id
        this.author = author
        this.url = url
        this.imgUrl = imgUrl
    }

    get Template() {

        return /*html*/`
        <h4>------</h4>
        <h5>Photographer: <b>${this.author}</b></h5>
        `
    }
}
