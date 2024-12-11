import React from "react";
import logo from "../../assets/images/logo.png";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export const Footer: React.FC = () => {
  return (
    <>
    <div className="m-4 flex flex-col lg:flex-row items-center justify-center  gap-4">
      <div className="relative  border border-white rounded-lg w-[373px] h-[134px]  ">
        <div className="absolute flex gap-2 -translate-y-[50%] top-0  left-[50%] -translate-x-[50%]">
          <img
            className="w-[86px] h-[76px]"
            style={{ width: "86px", height: "76px" }}
            src={logo}
            alt="logo"
          />
        </div>

        <h1 className="text-center mt-10  text-[28px] font-bold ">
          <span className="text-blue">DEEP</span> NET{" "}
          <span className="text-gray">SOFT</span>
        </h1>

        <div className="mt-4 container mx-auto flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl hover:text-gray-400" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl hover:text-gray-400" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl hover:text-gray-400" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
      <div className=" border lg:-order-1 flex flex-col border-white justify-center items-center rounded-lg w-[373px] h-[134px]  ">
        <h2 className="text-2xl font-bold mb-4 text-blue">Connect with Us</h2>
        <div className="flex items-center mb-3">
          <FaPhone className="text-xl mr-2" />
          <span className="text-gray">+91 9567843340</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-xl mr-2" />
          <span className="text-gray">info@deepnetsoft.com</span>
        </div>
      </div>
      <div className="border flex flex-col border-white justify-center items-center rounded-lg w-[373px] h-[134px]  ">
        <h2 className="text-2xl font-bold mb-4 text-blue">Find Us</h2>
        <div className="flex  items-center mb-3">
          <FaLocationPin className="text-xl mr-2" />
          <div>
          <span className= " block text-gray">First floor, Geo infopark, </span>
          <span className="block text-gray"> Infopark EXPY, Kakkanad</span>
       
          </div>
       </div>
       
      </div>
    </div>
    <div className="container text-gray mx-auto flex flex-col items-center justify-center gap-4  lg:flex-row lg:space-y-0">
        <span className="text-sm">
          © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.
        </span>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
};
