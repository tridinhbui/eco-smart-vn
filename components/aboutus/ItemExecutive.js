import React from 'react'

export default function ItemExecutive({ item, setShowModal, setContentCard   }) {
    return (
        <div style={{ height: '500px' }} onClick={() => {
            setShowModal(true)
            setContentCard(item)
        }} className='hover:bg-green-600 m-2 hover:m-0 duration-200 text-center my-5 p-5 bg-white rounded-xl cursor-pointer'>

                <div className='flex flex-col items-center my-auto mt-16'>
                    <img style={{ border: '10px solid #375849' }} className='rounded-full w-2/3' src={item.img} alt="img-executive" />
    
                    <div className='space-y-3 pt-5 text-gray-600'>
                        <p className='text-xl  font-bold'>{item.name}</p>
                        <p className='text-lg'>{item.position}</p>
                        {item.info ? <p className='text-sm mt-7'>{item.info}</p> : null}
                    </div>
    
                </div>

        </div>
    )
}
