import EditPost from "../components/editPost";
import HeaderAdmin from "../components/headerAdmin";

const EditPostPage={
    render(){
        return `
            ${HeaderAdmin.render()}
            ${EditPost.render()}
        `;
    }
}

export default EditPostPage;