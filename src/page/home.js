import Main from "../components/news";
const HomePage = {
    render() {
        return `
        <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4">Tin tức học tập</h2>
        ${Main.render()}
        <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4">Hoạt động sinh viên</h2>
        ${Main.render()}
        `
    }
}

export default HomePage;