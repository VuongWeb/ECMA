import Menu from "./menu";

const Header = {
    render() {
        return /*html*/ `
        <header>
         <div class="header_top">
            <img src="https://picsum.photos/100/50" alt="" class="m-auto">
        </div>
        <div class="header_main">
            ${Menu.render()}
            <form action="" class="my-3 ml-9 ml-4" >
            <input type="text" class="input_text">
            <button class="btn">Tìm kiếm</button>
        </form>
        </div>
        </header>   
        `;
    },
};

export default Header;