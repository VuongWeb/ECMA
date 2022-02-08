
const Header = {
    render() {
        return /*html*/ `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mixi - Shop</title>
    <link rel="icon" href="https://i.pinimg.com/474x/b2/57/81/b2578191becd55a7ebbc3aa9cfda9a7a.jpg">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://kit.fontawesome.com/19ffdd2821.js" crossorigin="anonymous"></script>
    <style>
        .banner {
            height: 580px;
        }

        .banner-bottom {
            height: 600px;
        }
    </style>
</head>

<body>
    <div class="container max-w-full mx-auto">
        <header class="flex justify-between mx-12 ">
            <div class="header-right flex">
                <div class="logo">
                    <img width="100px"
                        src="https://shop.mixigaming.com/wp-content/uploads/2020/09/118070490_238469837342215_4161744696367508805_n.jpg"
                        alt="">
                </div>
                <div class="menu my-auto">
                    <ul class="flex">
                        <li><a href="#"
                                class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] "><i
                                    class="fas fa-search"></i></a>
                        </li>
                        <li><a href="/"
                                class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">HOME</a>
                        </li>
                        <li><a href="/#"
                                class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">PAGES</a>
                        </li>
                        <li class="relative"><a href="/#"
                                class=" px-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">PRODUCTS
                            </a>
                        </li>
                        <li><a href="/signin"
                                class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">SIGNIN</a>
                        </li>
                        <li><a href="/signup"
                                class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">SIGNUP</a>
                        </li>
                        <li><a href="/admin"
                                class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">ADMIN</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header-left flex my-auto">
                <div class="phone-number border-r-2 border-[#888] pr-3 text-lg text-[#888] font-[600]">
                    <i class="fas fa-phone-alt"></i>
                    0359875710
                </div>
                <div class="cart pl-3 text-lg text-[#888] font-[600]">GIỎ HÀNG / 0 ₫
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </header> 
        <main class="bg-[#dbdad7]">

        `;
    },
};

export default Header;