import { listMenu } from "../data";

const Menu = {
    render() {
        return /*html*/ `<ul class="menu" id="menu">      
        ${listMenu.map((menu) => 
            `
            <li class="menu_link"><a href="/${menu.link}"> ${menu.name}</a></li>
            `
        ).join('')
    }
        </ul>
        `
    }
}

export default Menu ;