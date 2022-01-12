import HeaderAdmin from "../components/headerAdmin";
import { listPost } from "../data";

const EditPostPage={
    render(id){
        const result = listPost.find((post) => post.id === id)
        return /* html */`
        ${HeaderAdmin.render()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">
        Chỉnh sửa bài viết
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <div class="border-2 border-gray-200 rounded-lg ">
            
        <div class=" mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">

            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 ">
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title" id="title"  value="${result.title}" autocomplete="given-name" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md">
              </div>

              <div class="col-span-6 ">
                <label for="img" class="block text-sm font-medium text-gray-700">Img(url)</label>
                <img src="${result.img}" />
                <input type="text" name="title" id="title"  value="${result.img}" autocomplete="given-name" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md">
              </div>

              <div class="col-span-6 ">
                <label for="img" class="block text-sm font-medium text-gray-700">Description</label>
                <input type="text" name="img" id="desc"   value="${result.content}" autocomplete="family-name" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md">
              </div>
            </div>

          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Update
            </button>
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
    }
}

export default EditPostPage;