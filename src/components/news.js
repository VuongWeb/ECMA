import { listPost } from "../data";
const Main ={
    render (){
        return /* html */ `
        <div class="grid grid-cols-3 gap-8 mb-8">
            ${listPost.map((post) => `
                <div class="border p-4">
                    <a href="/news/${post.id}">
                        <img src="${post.img}" alt="" />
                    <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>                    
                    <p>${post.content}</p>
                    </a>
                </div>
            `).join("")}
            
        </div>
        `;  
    }
}
export default Main;