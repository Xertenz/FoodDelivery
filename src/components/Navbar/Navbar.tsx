import "./Navbar.scss";
import { assets } from "../../assets/assets.ts";
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.tsx";

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <>
      <nav className="navbar">
        <div className="container mx-auto! flex justify-between items-center py-2! px-8 sm:px-0">
          <div className="logo">
            <Link to="/">
              <img src={assets.logo} alt="Logo" className="logo-img" />
            </Link>
          </div>
          <ul className="navbar-menu hidden md:flex justify-between items-center">
            <li
              onClick={() => setMenu("home")}
              className={menu == "home" ? "active" : ""}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => setMenu("menu")}
              className={menu == "menu" ? "active" : ""}
            >
              <a href="#explore-menu">Menu</a>
            </li>
            <li
              onClick={() => setMenu("mobile-app")}
              className={menu == "mobile-app" ? "active" : ""}
            >
              <a href="#mobile-app">Mobile App</a>
            </li>
            <li
              onClick={() => setMenu("contact-us")}
              className={menu == "contact-us" ? "active" : ""}
            >
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
          <div className="navbar-right flex items-center gap-4 text-2xl">
            <div className="icon search">
              <IoSearch />
            </div>
            <div className="icon basket relative">
              <Link to={"/cart"}>
                <SlBasket />
              </Link>
              {getTotalCartAmount() == 0 ? (
                ""
              ) : (
                <span className="absolute w-2 h-2 bg-red-500 rounded-full top-[-5px] right-[-5px]"></span>
              )}
            </div>
            <div>
              <button
                className="btn-login border cursor-pointer bg-transparent text-[18px] px-4! py-2! rounded-full hover:bg-[#fff4f2] transition-colors duration-200"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
