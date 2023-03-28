import React from 'react'
import { FOOTER_HOMEPAGE } from '../../config/api'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTty } from "@fortawesome/free-solid-svg-icons";

export default function FooterAbout() {
    return (
        <div style={{ backgroundColor: '#365949' }}>
            <div className='container mx-auto py-5'>
                <div className='text-center text-white  md:space-y-3 pb-5'>
                    <h2 className='text-2xl'>{FOOTER_HOMEPAGE.eco_smart}</h2>
                    <p className='md:w-1/2 mx-auto text-base md:p-0 px-10 md:py-5 py-3'>{FOOTER_HOMEPAGE.slogan}</p>
                    <div className='space-x-5'>

                        <FontAwesomeIcon icon={faTty} style={{ fontSize: 35, color: "white", cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faTty} style={{ fontSize: 35, color: "white", cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faTty} style={{ fontSize: 35, color: "white", cursor: 'pointer' }} />

                    </div>

                </div>
                <div className='flex justify-between text-white mt-2 md:text-xl text-sm md:pl-0 md:pr-0  pl-10 pr-5'>
                    <p>Bản quyền thuộc về © <span><a href='#' className='underline'>ecosmartsolutions</a></span></p>
                    <div className='flex space-x-2  underline '>
                        <a href="#">
                            Trang Chủ
                        </a>
                        <a href="#">
                            Về Chúng Tôi
                        </a>
                        <a href="#">
                            Liên Hệ
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}
