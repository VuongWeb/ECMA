import { listPost } from "../data";

const PostAdmin = {
  render() {
    return  `
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">
            Danh sách bài viết
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="py-6 sm:px-0">
            <div class=" border-gray-200 rounded-lg h-96">
            
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sửa
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Xóa
              </th>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            ${listPost.map((post) => {
                return `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">${post.title}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <a href="/editpost/${post.id}"><div class="text-sm text-gray-900 bg-blue-500 pl-5 rounded-xl text-[#fff]">Sửa</div></a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <a href="/delete/${post.id}"><div class="text-sm text-gray-900 bg-red-500 pl-5 rounded-xl text-[#fff]">Xóa</div></a>
                </td>
              </tr>
                `
             }).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
             <a href="addpost">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Thêm
              </button></a>
          </div>
    </div>
  </div>
</div>

            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
        `;
  }
}

export default PostAdmin;