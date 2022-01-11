import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render(){
        return /*html*/ `
            ${Header.render()}
            <h2 class="">AboutPage</h2>
            <p>lorem abcbcbbccccccccccccccccccccccccccccccccbb</p>
            ${Footer.render()}
        `;
    },
};

export default AboutPage;