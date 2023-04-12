import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemSlideShow from './ItemSlideShow';
import { SLIDE_SHOW_HOMEPAGE } from '../../config/api'
import { useTranslation } from 'react-i18next';


export default function () {
  const {t} = useTranslation();

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


  const renderItemSlideShows = () => {
    return SLIDE_SHOW_HOMEPAGE.list_img.map((item, index) => {
      return <ItemSlideShow item={item} key={index} />
    })
  }

  return (
    <div className='slideShow_homePage sm:my-20 mx-auto p-7 md:w-full' >
      <div className='container mx-auto rounded-2xl relative' style={{ backgroundColor: '#365949' }}>
        <h2 className='text-center text-3xl hover:text-4xl h-10 font-bold pt-10 pb-10 text-white'>{t(`headersHome.slideshow`)}</h2>
        <div className=" wrapper md:px-10 px-5 pt-6">
          <Carousel showDots={true} autoPlay={true} infinite={true} responsive={responsive}>

            {renderItemSlideShows()}

          </Carousel>;
        </div>
      </div>
    </div>
  )
}
