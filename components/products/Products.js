import React from 'react'
import Menu from './Menu'
import ContactHomePage from '../home/ContactHomePage'
import Feedback from './Feedback'

export default function Products() {
  return (
   <>
        <div className='text-center text-4xl hover:text-5xl md:text-5xl md:hover:text-6xl text-white font-bold bg-cover' style={{backgroundImage: 'url(https://ecosmart.netlify.app/static/img/activities_page/titlebackground.jpg)', height: '115px'}}>
            <h1 className='py-7 ' style={{color: '#FCF5E5'}}>Sản phẩm</h1>
        </div>
        <Menu/>
        <ContactHomePage/>
        <Feedback/>
   </>
  )
}