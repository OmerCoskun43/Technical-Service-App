/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/jsx-key */
import { FaInstagram, FaPhone, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import logo3 from "../assets/logo3.png";

const Footer = () => {
  return (
    <div className="app  md:m-0  container md:mx-auto  w-full flex   items-end justify-center rounded-lg border-2 border-black font-poppins">
      <div className="py-6 flex gap-2 md:gap-0 justify-center items-center md:items flex-col md:flex-row  md:justify-evenly bg-blue-800 text-white w-full p-4 relative">
        <div className="text-center">
          <div className="footer-img flex  items-center">
            <img
              src={logo3}
              alt=""
              className="w-16 h-auto  bg-black p-1 rounded-lg"
            />
            <span className="text-xl md:text-3xl font-bold pl-2 text-white">
              Uzman Teknik Servis
            </span>
          </div>
          <div className="infos text-gray-400">
            <span>
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-blue-900 font-bold animate-pulse bg-white px-1 rounded-lg">
                CSKN Design
              </span>{" "}
            </span>
            <span>All rights reserved</span>
          </div>
        </div>
        <div className="flex flex-col gap-2   font-bold pl-2 text-white">
          <div className="flex items-center gap-4  border-b-2 pb-1">
            <FaPhone className="text-3xl md:text-2xl " />
            <p className="md:text-sm">0555 252 44 11</p>
          </div>

          <div className="flex items-center gap-4 border-b-2 pb-1">
            <FaRegAddressCard className="text-5xl md:text-2xl" />
            <p className="md:text-sm">
              Dumlupınar Mahallesi Taberi Sokak No:26 Daire:3 Kütahya/Merkez
            </p>
          </div>
        </div>
        <div className="footer-icons flex items-center space-x-3">
          <a href="https://wa.me/905552524411" target="_blank" alt="whatsapp">
            <FaWhatsapp className="w-14 h-14 p-2 rounded-full bg-[#F012BE] hover:bg-white hover:text-[#F012BE] cursor-pointer" />
          </a>
          <a href="https://wa.me/905552524411" target="_blank">
            <FaFacebook className="w-14 h-14 p-2 rounded-full bg-[#F012BE] hover:bg-white hover:text-[#F012BE] cursor-pointer" />
          </a>
          <a href="https://wa.me/905552524411" target="_blank">
            <FaInstagram className="w-14 h-14 p-2 rounded-full bg-[#F012BE] hover:bg-white hover:text-[#F012BE] cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
