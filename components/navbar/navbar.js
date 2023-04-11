import React, { useState } from "react";
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import Link from 'next/link';
import { NAV_ITEMS, NAV_LINKS } from '../../config/DataPage/navAPI/navAPI'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import ItemNavbar from "./ItemNavbar";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const { i18n } = useTranslation()
  const changeLanguages = (lng) => i18n.changeLanguage(lng)

  // ----------------------------------------------------------------
  return (
    <nav className="w-full white shadow">
      <div className="justify-between container px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block" style={{ paddingTop: '3px', paddingBottom: '3px' }}>

            <Link href="/">
              <Image src={logo} alt="logo" style={{ width: '80px', height: '80px' }} />
            </Link>

            <div className="md:hidden flex items-center">
              <button
                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                style={{ color: 'gray' }}
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
              <div>
                <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 17, color: '#375849' }} />
                <select className='outline-none font-semibold cursor-pointer' onChange={(e) => changeLanguages(e.target.value)}>
                  <option value="vn">VN</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </div>

          </div>

        </div>

        <ItemNavbar NAV_LINKS={NAV_LINKS} changeLanguages={changeLanguages} navbar={navbar} setNavbar={setNavbar} NAV_ITEMS={NAV_ITEMS} />

      </div>
    </nav>
  );
};

export default Navbar;