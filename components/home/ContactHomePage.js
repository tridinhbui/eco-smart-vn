import React from 'react'
import { FOOTER_HOMEPAGE, MAP, ADDRESS } from '../../config/api'

import FooterHomePage from './FooterHomePage';

export default function ContactHomePage() {
  return (
    <div style={{ backgroundColor: '#365949' }}>
      <div className='container mx-auto'>
        <div className='md:grid md:grid-cols-2 py-10 px-5 md:px-0 '>
          <div className='text-white space-y-4 md:pb-0 pb-10'>
            <p className='text-4xl font-bold'>{FOOTER_HOMEPAGE.title_contact}</p>
            <h1 className='text-4xl font-bold'>{FOOTER_HOMEPAGE.eco_vn}</h1>
            <p className='text-xl pt-5 text-red-500'>{FOOTER_HOMEPAGE.keep_contact}</p>

            <div className='text-lg  space-y-5 px-5'>
              <p>{ADDRESS.name}</p>
              <p>{ADDRESS.phone}</p>
              <p>{ADDRESS.address}</p>
              <p>{ADDRESS.email}</p>
            </div>

          </div>

          <div className='md:mx-auto md:p-0'>
            <iframe className='px-5 md:p-0' src={MAP} width={430} height={380} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>

        </div>

        <FooterHomePage />

      </div>
    </div>
  )
}
