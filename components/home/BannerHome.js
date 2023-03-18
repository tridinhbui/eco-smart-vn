import React from 'react';
import style from '../../styles/bannerHomePage.module.css'
import Image from 'next/image';
import logo from '../../public/images/ess_logo.jpg'
import { SLOGAN_TEXT } from '../../config/text'


export default function BannerHome() {
    return (
        <div className='container mx-auto my-20'>
            <div className='grid grid-cols-2'>
                <div className="img_eco flex justify-center items-center h-full">
                    <Image src={logo} alt="eco-logo" width='700'></Image>
                </div>
                <div className="eco-slogan ">
                    <div className="text-center">
                        <h1 className="text-7xl mt-7">{SLOGAN_TEXT.name}</h1>
                        <h2 className="text-3xl my-7 font-semibold">{SLOGAN_TEXT.slogan1}</h2>
                        <p className='text-2xl leading-10'>
                            {SLOGAN_TEXT.slogan2}
                        </p>
                        <button className={`mt-8 text-center text-white rounded-md  duration-100 ${style.btn_banner}`}>
                            <a href="#" className='font-bold text-base'>Đọc thêm<span className='duration-300'>↘</span></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
