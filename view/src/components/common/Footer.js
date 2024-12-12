import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-sans tracking-wide">
      <div className="py-12 px-6 sm:px-12">
        <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
          <div>
            <NavLink to="/">
              <img src="/logo.png" alt="logo" className="h-[40px] " />
            </NavLink>
          </div>

          <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-4 sm:space-x-6">
            <li>
              <NavLink
                to="/"
                className="text-gray-300 hover:text-white text-sm sm:text-base"
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="text-gray-300 hover:text-white text-sm sm:text-base"
              >
                Sản phẩm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-300 hover:text-white text-sm sm:text-base"
              >
                Thông tin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-300 hover:text-white text-sm sm:text-base"
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-500" />

        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <span className="sr-only">Youtube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        <p className="text-center text-gray-300 text-base">
          © SaoTruc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
