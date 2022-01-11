import { listPost } from "../data"

const DetailNewsPage ={
    render (id){
        const result  = listPost.find((post)=> post.id===id)
        return `
        <h1>${result.title}</h1>
        <img src="${result.img}" />
        <p>${result.content}</p>
        `
    }
}

export default DetailNewsPage;