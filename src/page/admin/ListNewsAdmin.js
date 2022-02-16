import HeaderAdmin from "../../components/headerAdmin";
import PostAdmin from "../../components/PostAdmin";

const ListNewsAdmin ={
    async render(){
        return `
        ${await HeaderAdmin.render()}
        ${await PostAdmin.render()}
        `;
    },
    afterRender(){
        PostAdmin.afterRender();
    }
}

export default ListNewsAdmin;