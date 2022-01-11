import { listPost } from "../data"

const DetailNewsPage = {
    render(id) {
        const result = listPost.find((post) => post.id === id)
        return /* html */`
        <h1 class="text-center pt-4 text-4xl font-medium">Chi tiết bài viết</h1>
        <div class="text-center pt-8">
        <img src="${result.img}" class="mx-auto" width="600px" />
        <h1 class="pt-4 text-2xl font-medium text-orange-500">${result.title}</h1>
        <p class="py-3 font-medium">${result.content}</p> 
        </div>
        `
    }
}

export default DetailNewsPage;