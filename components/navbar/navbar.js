import React, { useState } from "react";
import { NAVBAR_TEXT } from '../../config/text';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import Link from 'next/link';

const navItems = [NAVBAR_TEXT.home, NAVBAR_TEXT.product, NAVBAR_TEXT.activity, NAVBAR_TEXT.aboutus, NAVBAR_TEXT.contact];
const navLinks = ["/", "/product", "/activities", "/about-us", "/contact"];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block" style={{paddingTop:'3px', paddingBottom:'3px'}}>
            <Link href="/">
              <Image src={logo} alt="logo" style={{ width: '80px', height: '80px' }} />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                style={{color:'gray'}}
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navItems.map((item, index) => (
                <li className="text-black " key={index}>
                  <Link href={navLinks[index]}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;