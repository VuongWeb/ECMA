import AddPostAdmin from "../components/addpostAdmin";
import HeaderAdmin from "../components/headerAdmin";

const AddPostAdminPage ={
    render(){
        return `
            ${HeaderAdmin.render()};
            ${AddPostAdmin.render()}
        `;
    }
}
export default AddPostAdminPage;