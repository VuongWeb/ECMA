import axios from "axios";
import { add } from "../api/product";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import HeaderAdmin from "./headerAdmin";
import { getCateAll } from "../api/cate";
import $ from "jquery";
import validate from "jquery-validation";

const AddProductAdmin = {
  async render() {
    const { data } = await getCateAll();
    // console.log(document)
    return /*html*/ `
      ${HeaderAdmin.render()}
          <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
          Add Product
            </h1>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
              <div class="border-2 border-gray-200 rounded-lg ">
                    <div class=" mt-5 md:mt-0 md:col-span-2">
                      <form action="" id="form-add-pro">
                        <div class="shadow overflow-hidden sm:rounded-md">
                          <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-3">
                                <label for="title" class="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" id="name" autocomplete="given-name" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md">
                              </div><br>
                              <div class="col-span-6 sm:col-span-3">
                                <label for="img" class="block text-sm font-medium text-gray-700">Img(url)</label>
                                <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1645279177/gyoa74gjszhwmstchttd.jpg" width="200" id="img_preview" />
                                <input type="file" name="img" id="img" autocomplete="family-name" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  border-2 rounded-md">
                              </div>
                              <div class="col-span-6 sm:col-span-4">
                              <select name="" id="cate" class="border-gray-300 rounded-md border-2 p-2">
                                ${data
                                  .map(
                                    (item) => `
                                  <option value="${item.id}">${item.name}</option>
                                `
                                  )
                                  .join("")}
                                  
                              </select>
                              </div>
                              <div class="col-span-6 sm:col-span-4">
                                <label for="description" class="block text-sm font-medium text-gray-700">Price</label>
                                <input type="text" name="price" id="price"  class=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2">
                              </div>
                            </div>
                              <div class="col-span-6 sm:col-span-4">
                                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                                <input type="text" name="desc" id="desc"  class=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2">
                              </div>
                            </div>
                          </div>
                          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Thêm
                            </button>
                            <a href="/admin" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Quay lại
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>        
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </main>
        `;
  },

  afterRender() {
    const formAdd = $("#form-add-pro");
    const imgPro = document.querySelector("#img");
    const img_preview = document.querySelector("#img_preview");

    const CLOUDINARY_API =
      "https://api.cloudinary.com/v1_1/dkiw9eaeh/image/upload";
    const COLUDINARY_PRESET = "wgapgiev";

    imgPro.addEventListener("change", (e) => {
      img_preview.src = URL.createObjectURL(imgPro.files[0]);
    });

    formAdd.validate({
      rules: {
        "name" :{
          required:true,
          minlength:5
        },
        "img" :{
          required:true,
        },
        "price" :{
          required:true,
        },
        "desc" :{
          required:true,
        },
      },
      messages: {
        "name":{
          required:"Yêu cầu không bỏ trống!",
          minlength:"Yêu cầu nhập trên 5 ký tự!"
        },
        "price":{
          required:"Yêu cầu không bỏ trống!",
        },
        "img":{
          required:"Yêu cầu không bỏ trống!",
        },
        "desc":{
          required:"Yêu cầu không bỏ trống!",
        }
      },
      submitHandler: () => {
        console.log("abc");
        const addProHandler = async ()=>{
          const file = imgPro.files[0];
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", COLUDINARY_PRESET);
    
          await axios
            .post(CLOUDINARY_API, formData, {
              headers: {
                "Content-Type": "application/form-data",
              },
            })
            .then((response) => {
              const newPro = {
                name: document.querySelector("#name").value,
                cateId:document.querySelector("#cate").value,
                img: response.data.url,
                desc:document.querySelector('#desc').value,
                Price: document.querySelector("#price").value,
              };
              add(newPro);
              toastr.success("Bạn đã thêm thành công !");
              setTimeout((document.location.href = "/#/admin/listproducts"), 2000);
            });
        }
        addProHandler();
      },
    });

    // formAdd.addEventListener("submit", async (e) => {
    //   e.preventDefault();

      // const file = imgPro.files[0];
      // const formData = new FormData();
      // formData.append("file", file);
      // formData.append("upload_preset", COLUDINARY_PRESET);

      // await axios
      //   .post(CLOUDINARY_API, formData, {
      //     headers: {
      //       "Content-Type": "application/form-data",
      //     },
      //   })
      //   .then((response) => {
      //     const newPro = {
      //       name: document.querySelector("#name").value,
      //       cate_id:document.querySelector("#cate").value,
      //       img: response.data.url,
      //       desc:document.querySelector('#desc').value,
      //       Price: document.querySelector("#price").value,
      //     };
      //     add(newPro);
      //     toastr.success("Bạn đã thêm thành công !");
      //     setTimeout((document.location.href = "/#/admin/listproducts"), 2000);
      //   });
    // });
  },
};

export default AddProductAdmin;
