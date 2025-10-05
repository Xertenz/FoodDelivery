import { assets } from "../../assets/assets";
import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer text-[#d9d9d9] bg-[#323232] py-12 flex flex-col gap-7 items-center">
      <div className="footer-content container mx-auto grid gap-12">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" className="mb-4" />
          <p className="mb-6">
            Lorem Ipsum is simple dummy text of the printing and typesetting
            industry. Lorem Ipsum has the industry's standart dummy text ever
            since 1500s, when an unknown printer took a gallery of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="footer-social-icons flex gap-4">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2 className="text-2xl font-bold mb-2">COMPANY</h2>
          <ul className="list-disc ps-[20px]">
            <li><span>Home</span></li>
            <li><span>About us</span></li>
            <li><span>Delivery</span></li>
            <li><span>Privecy Policy</span></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2 className="text-2xl font-bold mb-2">GET IN TOUCH</h2>
          <ul>
            <li>+1-222-456-7890</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="text-[#d9d9d9] w-full" />
      <p className="footer-copyright">
        Copyright (c) 2025 Author. All Rights Reserved.
      </p>
    </footer>
  );
}
