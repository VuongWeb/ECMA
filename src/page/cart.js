import Header from "../components/header";

const CartPage = {
    render(){
        const cart = JSON.parse(localStorage.getItem('cart'));
        return /*html*/`
        <table class="text-center mx-auto  my-12">
        <thead>
            <tr class="border-b-2 border-[#ccc] ">
                <th class="p-12">#</th>
                <th class="p-12"> Ảnh sản phẩm</th>
                <th class="p-12">Tên sản phẩm</th>
                <th class="p-12">Giá sản phẩm</th>
                <th class=""></th>
                <th class="p-12">Số lượng</th>
                <th class=""></th>
                <th class="p-12">thành tiền</th>
            </tr>
        </thead>
        <tbody>
            
            ${
                cart.map(item => `
                <tr class="border-b-2 border-[#ccc]">
                    <td class="p-12">1</td>
                    <td class="p-12"><img src="${item.img}" width="60" class="mx-auto"></td>
                    <td class="p-12 font-bold">${item.name}</td>
                    <td class="p-12">${item.Price}</td>
                    <td class="pl-12">+</td>
                    <td class="p-12">${item.quantity}</td>
                    <td class="pr-12">-</td>
                    <td class="p-12 text-red-500">999đ</td>
                </tr>
                `).join('')
            }
                
            
        </tbody>
        <tfoot>
            <tr class="">
                <td colspan="7" class="p-3 font-bold"> Tổng tiền:</td>
                <td class="font-bold text-red-600">999 đ</td>
            </tr>
        </tfoot>
    </table>
    <div class="item flex justify-evenly">
        <div class="left">
            <a href="/#/"><button class="bg-[#03778e] p-3 m-2 text-white">Tiếp tục mua hàng</button></a>
            <a href="#"><button class="bg-[#03778e] p-3 m-2 text-white">Thanh toán</button></a>
        </div>
        <form action="" class="p-4">
            <input type="text" class="p-2 outline-none border-2" placeholder="Mã giảm giá "><br>
            <button type="submit" class="bg-[#03778e] text-white p-2 mt-2 ">Áp dụng</button>
     </form>
    </div>
        `
    },
    afterRender(){
        Header.afterRender();
    }
}
export default CartPage;