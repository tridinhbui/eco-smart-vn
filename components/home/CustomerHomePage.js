import React from 'react'
import { CUSTOMER_HOMEPAGE } from '../../config/api'

export default function CustomerHomePage() {
    return (
        <div className='container mx-auto rounded-xl my-32' style={{ backgroundColor: '#365949' }}>
            <h2 className='py-10 text-white font-bold  text-center text-3xl h-4 hover:text-4xl'>Đội ngũ cố vấn - bảo trợ</h2>
            <div className='grid grid-cols-2 gap-12 mt-14 px-20'>

                {CUSTOMER_HOMEPAGE.map((item, index) => {
                    return (
                        <div className="customer_wrapper bg-white mb-10 p-6 rounded-xl" key={index}>
                            <p>{item.content}</p>
                            <div className='grid grid-cols-5 gap-5 mt-5'>
                                <div className='col-span-4'>
                                    <h4 className='text-xl font-semibold '>{item.name}</h4>
                                    <p>{item.info}</p>
                                </div>
                                <div className='col-span-1 w-100 flex items-center  rounded-full'>
                                    <img src={item.img} className='rounded-full w-full border-4 border-green-900' alt="img-customer"/>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
