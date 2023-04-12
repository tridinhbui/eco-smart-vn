import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

export default function ItemCustomer({ item,  index, t}) {

  return (
    <div key={index} className="customer_wrapper bg-white mb-10 p-6 rounded-xl">

      <p style={{ fontSize: '15px' }}>
        <FontAwesomeIcon icon={faQuoteLeft} style={{ color: '#365949', fontSize: '20px', marginRight: '7px' }} />
        {t(`advisoryHome.${index}.content`)}
        <FontAwesomeIcon icon={faQuoteRight} style={{ color: '#365949', fontSize: '20px', marginLeft: '7px' }} />
      </p>

      <div className='grid grid-cols-5 gap-5 mt-5'>
        <div className='col-span-4 space-y-1'>
          <h4 className='text-xl font-normal italic' >{t(`advisoryHome.${index}.name`)}</h4>
          <p style={{ fontSize: '15px' }}> {t(`advisoryHome.${index}.info`)} </p>

          <div className='flex space-x-2 mt-2'>
            <FontAwesomeIcon icon={faStar} style={{ color: '#365949', fontSize: '20px' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#365949', fontSize: '20px' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#365949', fontSize: '20px' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#365949', fontSize: '20px' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#365949', fontSize: '20px' }} />
          </div>

        </div>

        <div className='col-span-1 w-100 flex items-center  rounded-full'>
          <img src={item.img} className='rounded-full w-full border-4 border-green-900' alt="img-customer" />
        </div>

      </div>
    </div>
  )
}
