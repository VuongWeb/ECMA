import Navigo from "navigo";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./page/home";
import NewsPage from "./page/newsPage";
import DetailNewsPage from "./page/detailNews";
import AdminDashBroad from "./page/adminDashBoard";
import ListNewsAdmin from "./page/ListNewsAdmin";
import AddPostAdminPage from "./page/addPostPage";
import EditPostPage from "./page/editPostPage";
import SignIn from "./page/signin";
import SignUp from "./page/signup";

const router = new Navigo('/', { linksSelector: 'a' });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#banner").innerHTML = Banner.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
}

const printAdmin = (admin)=>{   
    document.querySelector("#header").innerHTML = '';
    document.querySelector("#banner").innerHTML = '';
    document.querySelector("#app").innerHTML = admin;
    document.querySelector("#footer").innerHTML = '';

}

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "": () => {
        print(HomePage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    }, 
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    }, 
    "/admin": () => {
        printAdmin(AdminDashBroad.render());
    },
    "/listpost": () => {
        printAdmin(ListNewsAdmin.render());
    },
    "/addpost": () => {
        printAdmin(AddPostAdminPage.render());
    },
    "/editpost/:id": ({data}) => {
        const { id } =data;
        printAdmin(EditPostPage.render(id));
    },
    "/signin": () => {
        printAdmin(SignIn.render());
    },
    "/signup": () => {
        printAdmin(SignUp.render());
    },
    

});
router.resolve();