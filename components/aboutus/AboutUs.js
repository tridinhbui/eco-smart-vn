import React from 'react'
import Awareness from './Awareness'
import Executive from './Executive'
import FooterAbout from './FooterAbout'
import Ourteam from './Ourteam'

export default function AboutUs() {
  return (
   <>
        <div className='text-center text-4xl hover:text-5xl md:text-5xl md:hover:text-6xl text-white font-bold bg-cover' style={{backgroundImage: 'url(https://ecosmart.netlify.app/static/img/activities_page/titlebackground.jpg)', height: '115px'}}>
            <h1 className='py-7 ' style={{color: '#FCF5E5'}}>Về Chúng Tôi</h1>
        </div>
        <Awareness />
        <Executive />
        <Ourteam />
        <FooterAbout />
   </>
  )
}
