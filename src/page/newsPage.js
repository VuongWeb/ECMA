import Main from "../components/news";

const NewsPage = {
    async render() {
         return `
        <h1 class="text-center py-4 text-4xl font-medium">Tin tức</h1>

                ${await Main.render()}
        
        `}
}

export default NewsPage;