import Header from "../components/header";

const AboutPage = {
    render(){
        return /*html*/ `
        <main>
        <h2 class="text-center font-[700] text-5xl p-8">ABOUT US</h2>
        <ul class="list-decimal p-12">
            <li class="p-3 text-2xl">Website chính thức của MixiShop. Chuyên cung cấp đồ hiệu Mixi, đồ lưu niệm, áo Refund Gaming, áo PUBG, CSGO. Ship toàn quốc nhanh chóng, đảm bảo.</li>
            <li class="p-3 text-2xl">📣Anh em ơi!
                Thời gian qua MixiShop đã nhận được nhiều ý kiến đóng góp, feedback của anh em về các sản phẩm lưu niệm của MixiShop. Đó là nguồn động lực to lớn, kinh nghiệm quý báu giúp Shop ngày càng cố gắng hoàn thiện hơn.
                Bởi vậy, áo Mixi mới sẽ được thiết kế rộng hơn so với mẫu cũ chút xíu, dáng áo sẽ đẹp hơn rất nhiều. Chất liệu vải được cải tiến, co giãn tốt hơn, giữ form khi mặc không bai xù bất chấp mọi hoạt động thể thao ngoài trời cũng như trong nhà nhé ạ.</li>
            <li class="p-3 text-2xl">Ờ thì vì là tôi có nhỡ bấm live trên MixiFood nên sang tạm đây trú chân vài hôm chờ sếp nguôi😢 tiện thể là mở bán thêm size to 1 số áo để ae thêm lựa chọn trong tủ đồ ae nhé. </li>
            <li class="p-3 text-2xl">Ngoài ra mẫu phòng stream sẽ được đưa lên nhiều hơn nhằm ôn lại kí ức tuổi trẻ trước khi mẫu áo mà “ai cũng biết là áo gì” chuẩn bị mở bán ae nhé. Yêu thương nhiều ❤️ </li>
        </ul>
    </main>
        `;
    },
    afterRender(){
        Header.afterRender();
    }
};

export default AboutPage;