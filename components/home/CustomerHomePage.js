import React from 'react'
import { CUSTOMER_HOMEPAGE } from '../../config/api'

import ItemCustomer from './ItemCustomer';
import { useTranslation } from 'react-i18next';

export default function CustomerHomePage() {
  const { t } = useTranslation();

  const renderListCustomer = () => {
    return CUSTOMER_HOMEPAGE.list_customer.map((item , index) => {
      return <ItemCustomer item={item} index={index} t={t} />
    })

  }

  return (
    <div className='w-full p-5'>
      <div className='container md:mx-auto w-full rounded-xl my-32' style={{ backgroundColor: '#365949' }}>
        <h2 className='md:py-10 py-2 text-white font-bold pt-7 text-center text-3xl h-4 hover:text-4xl'>{t(`advisoryHome.title`)}</h2>
        <div className='md:grid md:grid-cols-2 md:gap-12 mt-14 px-5 pb-5'>

          {renderListCustomer()}

        </div>
      </div>
    </div>
  )
}
