const Footer = {
    render() {
        return /* html*/ `
                </main>
                <!-- footer================================================ -->

                <hr class="bg-[#03778e]">
                <footer class="mx-16">
                    <div class="grid grid-cols-4 gap-16 py-12 outline-none">
                        <div class="cols">
                            <h5 class="font-[500] text-xl mb-2">Về chúng tôi</h5>
                            <p>Website chính thức và duy nhất của MixiShop.Hiện nay chúng mình chỉ nhận đơn hàng trên website
                                chứ không nhận bất kỳ nơi nào khác.</p>
                        </div>
                        <div class="cols">
                            <h5 class="font-[500] text-xl mb-2">Danh mục sản phẩm</h5>
                            <ul class="list-disc">
                                <li class="my-2"><a href="#" class="text-[#03778e]">Áo CSGO</a></li>
                                <li class="my-2"><a href="#" class="text-[#03778e]">Áo Mixi</a></li>
                                <li class="my-2"><a href="#" class="text-[#03778e]">Áo PUBG</a></li>
                                <li class="my-2"><a href="#" class="text-[#03778e]">Áo Refund Gaming</a></li>
                                <li class="my-2"><a href="#" class="text-[#03778e]">Áo ba lỗ</a></li>
                                <li class="my-2"><a href="#" class="text-[#03778e]">Đồ lưu niệm Mixi</a></li>
                            </ul>
                        </div>
                        <div class="cols">
                            <h5 class="font-[500] text-xl mb-2">Thông tin</h5>
                            <ul class="list-disc">
                                <li class="my-2"><a href="#" class="text-[#03778e]">Giới thiệu</a></li>
                                <li class="my-2"><a href="#" class="text-[#03778e]">Chính sách bảo mật</a></li>
                                <li class="my-2"><a href="#" class="text-[#03778e]">Điều khoản</a></li>
                                <li class="my-2"><a href="#" class="text-[#03778e]">Sitemap</a></li>
                            </ul>
                        </div>
                        <div class="cols">
                            <h5 class="font-[500] text-xl mb-2">Hỗ trợ</h5>
                            <p>Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage và Instagram . <br>
                                <i class="fab fa-facebook my-6 mr-4 text-3xl text-[#385898]"></i>
                                <i class="fab fa-instagram-square text-3xl text-[#e91e63]"></i>
                            </p>
                        </div>
                    </div>
                    <hr class="">
                    <div class="flex justify-between h-16 ">
                        <span class="text-[#ccc] my-4">CopyRight2022 - <span
                                class="font-[600] text-[#000]">MixiShop</span></span><img width="150"
                            src="https://www.computerhope.com/jargon/d/dcma.gif" alt="">
                    </div>
                </footer>
            </div>
        </body>
        
        </html>
        `
    }
}
export default Footer;