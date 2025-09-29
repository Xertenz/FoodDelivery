import "./Navbar.scss";
import { assets } from "../../assets/assets.ts";
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbar">
      <div className="container mx-auto! flex justify-between items-center py-2!">
        <div className="logo">
          <img src={assets.logo} alt="Logo" className="logo-img" />
        </div>
        <ul className="navbar-menu flex justify-between items-center">
          <li
            onClick={() => setMenu("home")}
            className={menu == "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu == "menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu == "mobile-app" ? "active" : ""}
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu == "contact-us" ? "active" : ""}
          >
            Contact Us
          </li>
        </ul>
        <div className="navbar-right flex items-center gap-4 text-2xl">
          <div className="icon search">
            <IoSearch />
          </div>
          <div className="icon basket relative">
            <SlBasket />
						<span className="absolute w-2 h-2 bg-red-500 rounded-full top-[-5px] right-[-5px]"></span>
          </div>
          <div>
            <button className="btn-login border cursor-pointer bg-transparent text-[18px] px-4! py-2! rounded-full hover:bg-[#fff4f2] transition transition-colors duration-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
