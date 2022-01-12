import HeaderAdmin from "../components/headerAdmin";
import PostAdmin from "../components/PostAdmin";

const ListNewsAdmin ={
    render(){
        return `
        ${HeaderAdmin.render()}
        ${PostAdmin.render()}
        `;
    }
}

export default ListNewsAdmin;