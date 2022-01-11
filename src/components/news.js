import { listPost } from "../data";
const Main ={
    render (){
        return /* html */ `
        <div class="grid grid-cols-3 gap-8">
            ${listPost.map((post) => `
                <div class="border p-4">
                    <a href="">
                        <img src="${post.img}" alt="" />
                    </a>
                    <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>                    
                    <p>${post.content}</p>
                </div>
            `).join("")}
            
        </div>
        `;
    }
}
export default Main;