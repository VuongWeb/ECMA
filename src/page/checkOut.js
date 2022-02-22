import Header from "../components/header";

const CheckOut={
    render(){
        return `
        <h2 class="text-center text-2xl p-8"><span>SHOPPING CART</span> > <span>CHECK OUT</span></h2>
            <div class="container text-center justify-between flex w-5/6 mx-auto py-8">  
            <div class="content m-8 w-2/3">
                <h2 class="text-2xl font-[600]">THÔNG TIN THANH TOÁN</h2>
                <form action="">
                    <div class=" text-left">
                        <label  class="font-[500] text-lg block mb-2" for="">Họ và Tên *</label>
                        <input type="text"  class="w-full p-2 outline-none mb-3 border-2  " placeholder="Họ và tên của bạn">
                    </div>
                    <div class="flex text-left  justify-between w-full">
                        <div class="inputs">
                            <label  class="font-[500] text-lg block mb-2" for="">Số điện thoại*</label>
                            <input type="text" class="  p-2 outline-none mb-3  border-2 w-[280]" placeholder="Họ và tên của bạn">
                        </div>
                        <div class="inputs">
                            <label  class="font-[500] text-lg block mb-2" for="">Email*</label>
                            <input type="text" class="  p-2 outline-none mb-3  border-2 w-[280]" placeholder="Email của bạn">
                        </div>
                    </div>
                    <div class="flex text-left justify-between w-full">
                        <div class="inputs">
                            <label class="font-[500] text-lg block mb-2"  for="">Địa chỉ*</label>
                            <input type="text" class= " p-2 outline-none mb-3  border-2 w-[280]"  placeholder="Thành phố - quận huyện">
                        </div>
                        <div class="input">
                            <label class="font-[500] text-lg block mb-2"  for="">Địa chỉ chi tiết*</label>
                            <input type="text" class="  p-2 outline-none mb-3  border-2 w-[280]" placeholder="Xã - Phường">
                        </div>
                    </div>
                    <h3 class="text-left text-xl font-[500]">Thông tin bổ sung*</h3>
                    <h5 class="text-left pb-2">Ghi chú đơn hàng( tuỳ chọn )</h5>
                    <textarea class="p-2 outline-none w-full border-2" id="" cols="60" rows="5" placeholder="Ghi chú về đơn hàng,ví dụ thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
                </form>
            </div>
            <div class="p-3 border-2 border-[#03778e]  w-1/3">
                <h2 class="text-2xl font-[500] text-left p-3">Đơn hàng của bạn</h2>
                <form action="">
                <table class="mx-auto">
                    <thead class="">
                        <tr class="border-b-2 border-[#ccc] mb-8">
                            <th class="px-8 py-4  ">SẢN PHẨM</th>
                            <th class="px-8 py-4 ">TẠM TÍNH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b-2 border-[#ccc] mb-8">
                            <td class="font-[500] p-4  ">abv</td>
                            <td class="p-4">20đ</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="font-[500] p-4">Tổng</td>
                            <td class="text-red-500 p-4"><span id="total">0</span>đ</td>
                        </tr>
                    </tfoot>
                </table>
                <div class="checkbox mt-4">
                <input type="checkbox"><label for="">Tôi đã đọc và đồng ý với điều kiện và điều khoản của web site *</label>
            </div><br>
                <button class="bg-[#FF9F45] text-white font-[500] text-lg py-2 px-3 my-4">Đặt hàng</button>
            </form>
            <form action="" class="p-4" >
                <input type="text" class="p-2 outline-none border-2" placeholder="Mã giảm giá "><br>
                <button type="submit" class="bg-[#03778e] text-white p-2 mt-2 ">Áp dụng</button>
         </form>
            </div>
        </div>  
        `
    },
    afterRender(){
        Header.afterRender();
    }
}
export default CheckOut;