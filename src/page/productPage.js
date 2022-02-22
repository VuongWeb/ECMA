import { getAll } from "../api/cate";
import Header from "../components/header";
import Main from "../components/product";

const ProPage = {
  async render() {
    const {data} = await getAll();
    // console.log(data.products);
    return `
        <h1 class="text-center p-8 text-2xl font-medium">Danh mục sản phẩm</h1>
        <div class="cate text-center mx-96 ">
                <ul class="flex py-12">
                <li class="menu_link p-2 bg-[#03778e] text-white font-[500] text-lg mx-8 rounded hover:bg-[#025566]"><a href="/products?_embed=pro">Tất cả sản phẩm</a></li>
                ${data.map(
                  (item) => `
                  <li class="menu_link p-2 bg-[#03778e] text-white font-[500] text-lg mx-8 rounded hover:bg-[#025566]"><a href="/cates/${item.id}?_embed=products">${item.name}</a></li>
                `
                ).join("")}                     
                </ul>
        </div>
        <h1 class="text-center p-8 text-4xl font-medium">Sản phẩm nổi bật</h1>
                ${await Main.render()}
        `;
  },
  afterRender() {
    Header.afterRender();
  },
};

export default ProPage;
