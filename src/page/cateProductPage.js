import Header from "../components/header";
import { numberFormat } from "../utils/cart";
import { getCate, getCateAll } from "../api/cate";
import { getAll } from "../api/product";

const CateProductsPage = {
  async render(id) {
      console.log(id)
    const listCate = (await getCateAll()).data;
    const products = (await getAll()).data;
    const productsCate = products.filter((item) => +id === +item.cateId);
    const cate =(await getCate(id)).data;
    console.log(cate)
    
    return `
        <h1 class="text-center p-8 text-2xl font-medium">Danh mục sản phẩm</h1>
        <div class="cate text-center mx-96 ">
                <ul class="flex py-12">
                <li class="menu_link p-2 bg-[#03778e] text-white font-[500] text-lg mx-8 rounded hover:bg-[#025566]"><a href="/#/products?_embed=pro">Tất cả sản phẩm</a></li>
                ${listCate
                  .map(
                    (item) => `
                  <li class="menu_link p-2 bg-[#03778e] text-white font-[500] text-lg mx-8 rounded hover:bg-[#025566]"><a href="/#/cates/${item.id}?_embed=products">${item.name}</a></li>
                `
                  )
                  .join("")}                     
                </ul>
        </div>
        <h1 class="text-center p-8 text-4xl font-medium">${cate.name}</h1>
        <div class="grid grid-cols-4 gap-12 mx-20 mb-20">
        ${
            productsCate.map((pro) => /*html*/`
                <div class="col-product box-border text-center relative">
                    <a href="/product/${pro.id}">
                        <img src="${pro.img}"
                            alt="">
                        <span class="flex justify-center p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </span>
                        <h2 class="font-[500] text-[#03778e] text-lg">${pro.name}</h2>
                        <span class="line-through p-2 text-[#888]">250,000₫</span><span
                            class="font-[500] text-red-500 text-lg">${numberFormat.format(pro.Price)}đ</span>
                        <div
                            class="sale absolute top-12 text-[#fff] bg-[#03778e] p-4 font-[700] rounded-3xl w-24 drop-shadow-lg ">
                            SALE
                            !</div>
                    </a>
                </div>
            `).join("")
        }
        </div>
        `;
  },
  afterRender() {
    Header.afterRender();
  },
};
export default CateProductsPage;
