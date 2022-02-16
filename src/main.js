import Navigo from "navigo";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./page/home";
import NewsPage from "./page/newsPage";
import DetailNewsPage from "./page/detailNews";
import EditPostPage from "./page/admin/editPostPage";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import AddPostAdmin from "./components/addpostAdmin";
import AboutPage from "./page/about";
import Contact from "./page/contact";
import AdminDashBroad from "./page/admin/adminDashBoard";
import ListNewsAdmin from "./page/admin/ListNewsAdmin";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#banner").innerHTML = Banner.render();
  document.querySelector("#app").innerHTML = await content.render(id);
  document.querySelector("#footer").innerHTML = Footer.render();
  if (content.afterRender) content.afterRender(id);
};

const printAdmin = async (admin, id) => {
  document.querySelector("#header").innerHTML = "";
  document.querySelector("#banner").innerHTML = "";
  document.querySelector("#app").innerHTML = await admin.render(id);
  document.querySelector("#footer").innerHTML = "";
  if (admin.afterRender) admin.afterRender(id);
};

router.on("/admin/*", () => {}, {
  before: (done) => {
      // console.log('dcm');
      const userId = JSON.parse(localStorage.getItem('user')).id;
      console.log(userId);
      if(userId === 1){
        done()
      }else{
        document.location.href="/";
      }
  },
});

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
  "/about": () => {
    print(AboutPage);
  },
  "/contact": () => {
    print(Contact);
  },
  "/news/:id": (value) => {
    // const { id } = data;
    print(DetailNewsPage, value.data.id);
  },
  "/admin": () => {
    printAdmin(AdminDashBroad);
  },
  "/admin/listpost": () => {
    printAdmin(ListNewsAdmin);
  },
  "/admin/addpost": () => {
    printAdmin(AddPostAdmin);
  },
  "/admin/editpost/:id": (value) => {
    printAdmin(EditPostPage, value.data.id);
  },
  "/signin": () => {
    printAdmin(SignIn);
  },
  "/signup": () => {
    printAdmin(SignUp);
  },
});
router.resolve();
