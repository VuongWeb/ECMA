import Main from "../components/news";

const NewsPage = {
    render() {
        return `
        <h1 class="text-center py-4 text-4xl font-medium">Tin tức</h1>

                ${Main.render()}
        
                ${Main.render()}
        `}
}

export default NewsPage;