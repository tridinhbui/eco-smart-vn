import React from 'react'
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function ItemNavbar({ NAV_LINKS, changeLanguages, navbar, NAV_ITEMS, setNavbar }) {

  const { t } = useTranslation()

  //----------------------------------------------------------------
  return (
    <div className="flex items-center space-x-3">

      <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 h-full ${navbar ? 'block' : 'hidden'}`} >
        <ul className="h-full items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">

          {NAV_ITEMS.map((item, index) => (
            <li onClick={() => setNavbar(!navbar)} className="text-black duration-75" key={index}>
              <Link href={NAV_LINKS[index]}>
                {t(`navbar.${item.title}`)}
              </Link>
            </li>
          ))}

          <div className="search_navbar hidden md:block">
            <input type="text" className="input_navbar" />
            <button className="btn_navbar">
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: 17 }} />
            </button>
          </div>

        </ul>
      </div>

      <div style={{fontSize: '18px'}} className='hidden md:block'>
        <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 19, color: '#375849' }} />
        <select className='outline-none font-semibold cursor-pointer' onChange={(e) => changeLanguages(e.target.value)}>
          <option value="vn">VN</option>
          <option value="en">EN</option>
        </select>
      </div>

    </div>
  )
}
