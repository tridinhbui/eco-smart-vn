import React from 'react'
import { ABOUT_HOMEPAGE } from '../../config/api'


export default function AboutHomePage() {
    return (
        <div className='text-white text-center mb-10' style={{ backgroundColor: '#365949' }}>
            <h1 className="text-center font-bold text-4xl pt-16">Sự khác biệt của Eco Smart Solutions</h1>
            <div className='grid grid-cols-3 py-24 px-14 gap-20'>

                {ABOUT_HOMEPAGE.map((item, index) => {
                    return (
                        <div className="banner_item" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-800 0 2000 502"><path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"/></svg>
                            <div className="banner_item_heading mt-5 font-bold text-2xl">{item.title}</div>
                            <div className="banner_item_content mt-1">{item.content}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
