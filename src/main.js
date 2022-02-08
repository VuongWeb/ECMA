import Navigo from "navigo";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./page/home";
import NewsPage from "./page/newsPage";
import DetailNewsPage from "./page/detailNews";
import AdminDashBroad from "./page/adminDashBoard";
import ListNewsAdmin from "./page/ListNewsAdmin";
import EditPostPage from "./page/editPostPage";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import AddPostAdmin from "./components/addpostAdmin";

const router = new Navigo('/', { linksSelector: 'a', hash :true });

const  print = async (content,id) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#banner").innerHTML = Banner.render();
    document.querySelector("#app").innerHTML = await content.render(id);
    document.querySelector("#footer").innerHTML = Footer.render();
    if(content.afterRender) content.afterRender();

}

const  printAdmin = async (admin,id)=>{   
    document.querySelector("#header").innerHTML = '';
    document.querySelector("#banner").innerHTML = '';
    document.querySelector("#app").innerHTML =await admin.render(id);
    document.querySelector("#footer").innerHTML = '';
    if(admin.afterRender) admin.afterRender();

}

router.on({
    "/": () => {
        print(HomePage);
    },
    "": () => {
        print(HomePage);
    },
    "/news": () => {
        print(NewsPage);
    }, 
    "/news/:id": (value) => {
        // const { id } = data;
        print(DetailNewsPage, value.data.id);
    }, 
    "/admin": () => {
        printAdmin(AdminDashBroad);
    },
    "/listpost": () => {
        printAdmin(ListNewsAdmin);
    },
    "/addpost": () => {
        printAdmin(AddPostAdmin);
    },
    "/editpost/:id": (value) => {
        printAdmin(EditPostPage,value.data.id);
    },
    "/signin": () => {
        printAdmin(SignIn);
    },
    "/signup": () => {
        printAdmin(SignUp);
    },
    

});
router.resolve();