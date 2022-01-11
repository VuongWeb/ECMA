import Navigo from "navigo";
import AboutPage from "./page/about";
import HomePage from "./page/home";

const router = new Navigo('/', { linksSelector: 'a' });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
}

router.on({
    "/": () =>{
        print(HomePage);
    },
    "/about":()=>{
        print(AboutPage);
    }
});
router.resolve();