
import React from 'react';
import style from '../../styles/bannerHomePage.module.css'
import Image from 'next/image';
import logo from '../../public/images/ess_logo.jpg'
import { SLOGAN_TEXT } from '../../config/text'


export default function BannerHome() {
  return (
    <div className='container mx-auto my-14'>
      <div className='md:flex items-center justify-center'>

        <div className="img_eco flex justify-center items-center h-full md:w-1/2">
          <Image src={logo} alt="eco-logo" width='700'></Image>
        </div>

        <div className="eco-slogan md:w-1/2">
          <div className="text-center px-5">
            <h1 className="md:text-7xl md:mt-7 text-5xl text-bold mt-3">{SLOGAN_TEXT.name}</h1>
            <h2 className="md:text-3xl text-xl md:my-7 my-4 font-normal">{SLOGAN_TEXT.slogan1}</h2>
            <p className='md:text-2xl md:leading-10 leading-6 text-base'>{SLOGAN_TEXT.slogan2}</p>

            <div className={`mt-8 ${style.div__btn_banner}`}>
              <button className={`${style.btn__banner} px-5 py-2 text-lg text-white font-semibold rounded-lg duration-75`}>Đọc Thêm</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
