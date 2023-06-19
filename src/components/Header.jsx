import React, { useState } from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { BsWhatsapp } from "react-icons/bs";

function Header() {
  const [nav, setNav] = useState(false);

  const _handleNav = () => {
    setNav(!nav);
  };

  const onNavItemsClicked = (e) => {
    e.preventDefault();
    setNav(false);
  };

  const phoneNumber = "+212667256799";
  const message = "IPTV ORDER";

  const handleClick = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${phoneNumber}?text=${message}&`);
    setNav(false);
  };

  return (
    <div className="fixed shadow-xl flex bg-[#070639] h-[60px] md:h-[90px] w-full justify-between items-center mx-auto px-5 z-50">
      <div className="text-white w-[195px] flex items-center">
        <img
          className="ml-5 mb-3 h-[40px] md:h-[55px] object-cover"
          src={logo}
          alt=""
        />
      </div>
      <ul className="hidden md:flex flex-row items-center justify-center">
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="text-white mr-6 cursor-pointer hover:scale-125 hover:text-[#FFCC00] ease-in-out duration-700"
        >
          Home
        </Link>
        <Link
          to="Features"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="text-white mr-6 cursor-pointer hover:scale-125 hover:text-[#FFCC00] ease-in-out duration-700"
        >
          Features
        </Link>
        <Link
          to="Pricing"
          spy={true}
          smooth={true}
          offset={-80}
          duration={1000}
          className="text-white mr-6 cursor-pointer hover:scale-125 hover:text-[#FFCC00] ease-in-out duration-700"
        >
          Pricing
        </Link>

        <Link
          to="Faq"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="text-white mr-6 cursor-pointer hover:scale-125 hover:text-[#FFCC00] ease-in-out duration-700"
        >
          Faq
        </Link>
        <Link
          to="Conatct us"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="text-white mr-6 cursor-pointer hover:scale-125 hover:text-[#FFCC00] ease-in-out duration-700"
        >
          Contact
        </Link>
      </ul>
      <a
        onClick={handleClick}
        className="hidden md:flex items-center w-[200px]"
      >
        <h3 className="mr-4 text-white">Contact Us 24/7</h3>
        <FaWhatsappSquare
          size={40}
          className="bg-green-500 text-white rounded-lg"
        />
      </a>

      <div className="block md:hidden" onClick={_handleNav}>
        {nav ? (
          <AiOutlineClose
            className="ease-in-out duration-700"
            color="white"
            size={25}
          />
        ) : (
          <AiOutlineMenu
            className="ease-in-out duration-700"
            color="white"
            size={25}
          />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 bg-[#070639] h-full w-[300px] border-r border-r-gray-400 ease-in-out duration-700"
            : "fixed left-[-100%] top-0 bg-[#070639] h-full w-[300px] border-r border-r-gray-400 ease-in-out duration-700"
        }
      >
        <div className="text-white w-[200px] p-4">IPTV SN</div>
        <ul className="flex flex-col uppercase text-l pt-24">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={onNavItemsClicked}
            className="text-white border-b border-b-gray-400 p-4"
          >
            Home
          </Link>
          <Link
            to="Features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={onNavItemsClicked}
            className="text-white border-b border-b-gray-400 p-4"
          >
            Features
          </Link>
          <Link
            to="Pricing"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            onClick={onNavItemsClicked}
            className="text-white border-b border-b-gray-400 p-4"
          >
            Pricing
          </Link>
          <Link
            to="Faq"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onClick={onNavItemsClicked}
            className="text-white border-b border-b-gray-400 p-4"
          >
            Faq
          </Link>
          <Link
            to="Conatct us"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onClick={onNavItemsClicked}
            className="text-white border-b border-b-gray-400 p-4"
          >
            Contact
          </Link>
          <div className="text-white p-4 border-b border-gray-400 flex flex-row items-center">
            <BsWhatsapp />
            <a onClick={handleClick} className="ml-2">
              Whatapp
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
