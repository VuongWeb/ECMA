import axios from "axios";

const AddPost = {
    render() {
        return `
            <form id="form-add-post">
            <input type="text" id="title-post">
            <input type="text" id="img-post">
            <textarea name="" id="desc-post" cols="30" rows="10"></textarea>
            </form>
        `
    },

    afterRender() {
        return addEventListener('submit', (e) => {
            e.preventDefault();
            const newsPost = {
                name: "Ghana",
                desc: "Invalid faker method - image.lorempixel",
                img: "http://placeimg.com/640/480/cats",
            }
            axios.post(newsPost);

        })
    }
}