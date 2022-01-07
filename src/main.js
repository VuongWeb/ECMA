import '../style.css';

const listMenu = ["Trang chủ", "Tuyển sinh", "Chương trình đào tạo", "Góc sinh viên", "Tuyển dụng"];
const listPost = [
    {
        img: "https://picsum.photos/300/200",
        title: "Vinh danh 295 sinh viên Fpoly học kỳ Spring 2018",
        content: "Với sự tham gia của các của rất trong các chuyên gia trong nhiều lĩnh vực ,kinh doanh,chương trình đã thu hút đông đảo sinh viên Fpoy tham dự"
    },
    {
        img: "https://picsum.photos/300/200",
        title: "Vinh danh 295 sinh viên Fpoly học kỳ Spring 2018",
        content: "Với sự tham gia của các của rất trong các chuyên gia trong nhiều lĩnh vực ,kinh doanh,chương trình đã thu hút đông đảo sinh viên Fpoy tham dự"
    },
    {
        img: "https://picsum.photos/300/200",
        title: "Vinh danh 295 sinh viên Fpoly học kỳ Spring 2018",
        content: "Với sự tham gia của các của rất trong các chuyên gia trong nhiều lĩnh vực ,kinh doanh,chương trình đã thu hút đông đảo sinh viên Fpoy tham dự"
    },
]

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