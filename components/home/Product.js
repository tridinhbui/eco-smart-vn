import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ItemProduct from './ItemProduct';
import { PRODUCT_HOMEPAGE } from '../../config/api'
import { useTranslation } from 'react-i18next';


export default function Product() {
  const {t} = useTranslation()
  // use hook
  const [widthOfScreen, setWidthOfScreen] = useState(false);

  useEffect(() => {
    window.innerWidth < 1024 && setWidthOfScreen(!widthOfScreen)
  }, []);

  // library multi react 
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

  // render ele
  const renderListProducts = () => {
    return PRODUCT_HOMEPAGE.list_product.map((product, index) => {
      return <ItemProduct product={product} key={index} id={index} t={t} />
    })
  }

  return (
    <div className='product_homepage sm:my-20 mx-auto p-7 md:w-full' >
      <div className='container mx-auto rounded-2xl relative' style={{ backgroundColor: '#365949' }}>
        <h2 className='text-center text-4xl hover:text-5xl h-20 font-bold pt-10 pb-10 text-white'>{t(`productsHome.title`)}</h2>

        <div className=" wrapper md:px-10 px-5 mt-10">

          <Carousel arrows={false} infinite={widthOfScreen} showDots={widthOfScreen} responsive={responsive}>
            {renderListProducts()}
          </Carousel>

          <div className="btn_product text-center py-7">
            <button className='px-7 py-2 bg-white text-lg rounded-lg font-semibold hover:bg-slate-50'>{t(`productsHome.more`)}</button>
          </div>

        </div>

      </div>
    </div>
  )
}
