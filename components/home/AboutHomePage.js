import React from 'react'
import { ABOUT_HOMEPAGE, TITLE_ABOUTHOME } from '../../config/api'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutHomePage() {
  
  const renderListAbout = () => {
    return ABOUT_HOMEPAGE.map((item, index) => {
      return (
        <div className="banner_item flex-col justify-center" key={index}>
          <FontAwesomeIcon icon={faPersonChalkboard} style={{ fontSize: 100, color: "white" }} />
          <div className="banner_item_heading mt-5 font-bold text-2xl">{item.title}</div>
          <div className="banner_item_content mt-1">{item.content}</div>
        </div>
      )
    })
  }

  //----------------------------------------------------------------
  return (
    <div className='hidden md:visible text-white text-center mb-10' style={{ backgroundColor: '#365949' }}>
      <h1 className="text-center font-bold text-4xl pt-16">{TITLE_ABOUTHOME}</h1>
      <div className='grid grid-cols-3 py-24 px-14 gap-20'>

        {renderListAbout()}

      </div>
    </div>
  )
}
