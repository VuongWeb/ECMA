import '../style.css';
import { listMenu } from './data';
import { listPost } from './data';



const menuItem = document.querySelector("#menu");
const newsItem = document.querySelector("#news");
const actices = document.querySelector("#actice");

const showMenu = () => {
    const show = listMenu.map((menu) =>
        `
        <li><a href="" class="menu_link">${menu}</a></li>
        `
    ).join("");

    if (menuItem) {
        menuItem.innerHTML = show;
    }
}
showMenu();


const showPost = () => {
    const post = listPost.map((post) =>
        `
        <div class="col   ">
        <img src="${post.img}" alt="" class="m-auto">
        <h4 class="title_content">${post.title}</h4>
        <p class="text_content">${post.content}</p>
      </div> 
        `
    ).join("");

    if(newsItem){
        newsItem.innerHTML=post;
    }

    if(actices){
        actices.innerHTML=post;
    }
}

showPost();