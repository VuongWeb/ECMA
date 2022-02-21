import { reRender } from "../utils/reRender";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
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
                        <li><a href="/about"
                                class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">ABOUT US</a>
                        </li>
                        <li><a href="/products"
                                class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">PRODUCTS</a>
                        </li>
                        <li><a href="/posts"
                                class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">POSTS</a>
                        </li>
                        <li class="relative"><a href="/contact"
                                class=" px-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">CONTACT
                            </a>
                        </li>
                        <li id="admin">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header-left flex my-auto">
            <div id="signined" class="flex">
                
            </div>
            <a href="/#/cart">
                <div class="cart px-4 text-lg text-[#888] font-[600] item-center relative">GIỎ HÀNG 
                    <i class="fas fa-shopping-cart z-0 text-2xl"></i>
                    <span id="number" class="absolute bottom-2 left-32 z-10 text-red-500 p-1">0</span>
                </div>
                </a>
            </div>
        </header> 
        <main class="bg-[#dbdad7]">

        `;
  },
  afterRender() {
    const signined = document.querySelector("#signined");
    const admin = document.querySelector("#admin");
    const number_cart= document.querySelector("#number");
    // check cart
    if(localStorage.getItem('cart')){
      number_cart.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
    }
    //check user signin
    if (localStorage.getItem("user")) {
      // console.log(localStorage.getItem("user"))
      signined.innerHTML = ` <div id="signined" class="flex">
      <div class="user font-sans text-xl px-3">Xin chào : <span id="emailUser"></span></div>
      <div class="logout cursor-pointer font-sans text-lg px-3" id="logout">Đăng xuất</div>
    </div>`;
      //print username
      const email = document.querySelector("#emailUser");
      email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
      //phân quyền
      if (JSON.parse(localStorage.getItem("user")).id === 1) {
        admin.innerHTML = `<a href="/admin"
        class="p-3 text-lg text-[#888] font-[600] hover:border-b-2 hover:border-[#03778e] hover:text-[#03778e] ">ADMIN</a>`;
      } else {
        admin.innerHTML = "";
      }
      //logout
      const logout = document.querySelector("#logout");
      logout.addEventListener("click", () => {
        localStorage.removeItem("user");
        toastr.success("bạn đã đăng xuất thành công !");
        reRender(Header, "#header");
      });
    } else {
      signined.innerHTML = `<ul class="list-none flex">
        <li class="px-2 "><a href="/#/signin"
        class=" text-lg text-[#888] font-[600] hover:text-[#03778e] "><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg></a>
        </li>
        <li class="px-2 "><a href="/#/signup"
        class=" text-lg text-[#888] font-[600] hover:text-[#03778e] "><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg></a>
        </li>
    </ul>`;
    }
    //
  },
};

export default Header;
