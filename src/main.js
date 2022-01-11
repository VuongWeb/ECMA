import Navigo from "navigo";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./page/about";
import HomePage from "./page/home";
import NewsPage from "./page/newsPage";
import DetailNewsPage from "./page/detailNews";

const router = new Navigo('/', { linksSelector: 'a' });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#banner").innerHTML = Banner.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
}

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    }, "/news/:id": ({data}) => {
        const {id} =data;
        console.log(id);
        print(DetailNewsPage.render(id));
    }

});
router.resolve();