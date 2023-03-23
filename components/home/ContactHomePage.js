import React from 'react'
import { FOOTER_HOMEPAGE, MAP, ADDRESS } from '../../config/api'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTty } from "@fortawesome/free-solid-svg-icons";

export default function ContactHomePage() {
    return (
        <div style={{ backgroundColor: '#365949' }}>
            <div className='container mx-auto'>
                <div className='md:grid md:grid-cols-2 py-10 px-5 md:px-0 '>
                    <div className='text-white space-y-4 md:pb-0 pb-10'>

                        <p className='text-5xl pt-5 text-white font-bold '>{FOOTER_HOMEPAGE.keep_contact}</p>

                        <div className='text-lg  space-y-3 px-5'>
                            <p>{ADDRESS.name}</p>
                            <p>{ADDRESS.phone}</p>
                            <p>{ADDRESS.address}</p>
                            <p>{ADDRESS.email}</p>

                            <div className='space-x-5'>

                                <FontAwesomeIcon icon={faTty} style={{ fontSize: 35, color: "white", cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faTty} style={{ fontSize: 35, color: "white", cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faTty} style={{ fontSize: 35, color: "white", cursor: 'pointer' }} />

                            </div>

                        </div>

                    </div>

                    <div className='md:mx-auto md:pt-3 overflow-hidden'>
                        <iframe className=' md:p-0' src={MAP} width={550} height={310} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>

                </div>

                <div className='text-center text-white  md:space-y-3 pb-8'>
                    <h2 className='text-2xl'>{FOOTER_HOMEPAGE.eco_smart}</h2>
                    <p className='md:w-1/2 mx-auto text-base md:p-0 px-10 py-5'>{FOOTER_HOMEPAGE.slogan}</p>
                    <p className='md:text-lg text-base'>Bản quyền thuộc về © <span><a href='#' className='underline'>ecosmartsolutions</a></span></p>
                </div>

            </div>
        </div>
    )
}
