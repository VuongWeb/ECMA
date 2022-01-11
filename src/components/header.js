import Menu from "./menu";
import Search from "./search";

const Header = {
    render() {
        return /*html*/ `
        <header>
         <div class="header_top">
            <img src="https://picsum.photos/100/50" alt="" class="m-auto">
        </div>
        <div class="header_main">
            ${Menu.render()}
            ${Search.render()}
        </div>
        </header>   
        `;
    },
};

export default Header;