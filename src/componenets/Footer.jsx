import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";

function Footer() {
  return (
    <div className=" w-full bg-[#2D314D] ">
      <div className="w-4/5 m-auto flex flex-col md:flex-row justify-between items-center  py-8 px-6 gap-8">
        <div className="flex flex-col items-center md:items-start  gap-12 ">
          <img class="filter invert  " src="./images/logo.svg" alt="Logo" />
          <ul className="flex gap-4">
            <li>
              <BsFacebook
                size={25}
                color="white"
                className="cursor-pointer"
                onMouseOver={({ target }) => (target.style.color = "#31D35C")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </li>
            <li>
              <BsTwitter
                size={25}
                color="white"
                className="cursor-pointer"
                onMouseOver={({ target }) => (target.style.color = "#31D35C")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </li>
            <li>
              <BsYoutube
                size={25}
                color="white"
                className="cursor-pointer"
                onMouseOver={({ target }) => (target.style.color = "#31D35C")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </li>
            <li>
              <BsInstagram
                size={25}
                color="white"
                className="cursor-pointer"
                onMouseOver={({ target }) => (target.style.color = "#31D35C")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </li>
            <li>
              <BsPinterest
                size={25}
                color="white"
                className="cursor-pointer"
                onMouseOver={({ target }) => (target.style.color = "white")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </li>
          </ul>
        </div>

        <ul className=" flex flex-col justify-center items-center text-center md:grid md:grid-cols-2 gap-6 ">
          <li className="text-gray-300 px-2 py-1 cursor-pointer hover:text-[#31D35C]">
            About
          </li>
          <li className="text-gray-300 px-2 py-1 cursor-pointer hover:text-[#31D35C]">
            Conact
          </li>
          <li className="text-gray-300 px-2 py-1 cursor-pointer hover:text-[#31D35C]">
            Blog
          </li>
          <li className="text-gray-300 px-2 py-1 cursor-pointer hover:text-[#31D35C]">
            Careers
          </li>
          <li className="text-gray-300 px-2 py-1 cursor-pointer hover:text-[#31D35C]">
            Support
          </li>
          <li className="text-gray-300 px-2 py-1 cursor-pointer hover:text-[#31D35C]">
            Privacy policy
          </li>
        </ul>

        <div className="flex flex-col items-center md:items-end gap-6 ">
          <button className="hover:opacity-[0.8] text-[20px] md:text-[16px] px-6 py-2  rounded-3xl bg-gradient-to-r from-green-500 to-blue-300 text-white ">
            Request invite
          </button>
          <p className="text-gray-300 text-[14px] md:text-[16px]">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
