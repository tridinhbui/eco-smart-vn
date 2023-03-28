import React from 'react'

export default function ItemAwareness({ item }) {

    const {img, list_content} = item

    return (
        <div className='py-10 rounded-xl' >
            <img className='w-full rounded-t-3xl' src={img} alt="img" style={{ border: '4px solid #354E48' }} />
            <div className='rounded-b-3xl px-10 py-7 space-y-1' style={{ border: '2px solid #354E48' }}>

                {list_content.map((item, index) => <p className='font-semibold' key={index}>{item}</p>)}

            </div>
        </div>
    )
}
