import React from 'react'
import { FOOTER_HOMEPAGE } from '../../config/api'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTty } from "@fortawesome/free-solid-svg-icons";


export default function FooterHomePage() {

  const renderNextPage = () => {
    return FOOTER_HOMEPAGE.next_page.map((item, index) => {
      return <a href="#" className='underline md:ml-auto' key={index}>{item}</a>
    })
  }

  return (
    <div className='text-center text-white space-y-5'>
      <h2 className='text-2xl'>{FOOTER_HOMEPAGE.eco_smart}</h2>
      <p className='md:w-1/2 mx-auto text-base md:p-0 p-10'>{FOOTER_HOMEPAGE.slogan}</p>
      <div className='space-x-5'>

        <FontAwesomeIcon icon={faTty} style={{ fontSize: 35, color: "white", cursor: 'pointer' }} />
        <FontAwesomeIcon icon={faTty} style={{ fontSize: 35, color: "white", cursor: 'pointer' }} />
        <FontAwesomeIcon icon={faTty} style={{ fontSize: 35, color: "white", cursor: 'pointer' }} />

      </div>
      <div className='flex justify-between pb-10'>
        <p className='md:text-lg text-base'>Bản quyền thuộc về © <span><a href='#' className='underline'>ecosmartsolutions</a></span></p>
        <div className='flex md:space-x-3 space-x-2 md:text-lg text-sm md:text-right text-left w-1/2'>

          {renderNextPage()}

        </div>
      </div>
    </div>
  )
}
