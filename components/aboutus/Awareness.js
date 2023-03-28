import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ABOUTUS_PAGE } from '../../config/api'
import ItemAwareness from './ItemAwareness';

export default function Awareness() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    };

    const {title, list_awareness} = ABOUTUS_PAGE.awareness_aboutus
    const renderItemAwareness = () => (
        list_awareness.map((item, index) => <ItemAwareness item={item} key={index} />)
    )

    // ----------------------------------------------------------------
    return (

        <div className='my-12'>
            <div className='container mx-auto'>
                <h2 style={{color: '#283746'}} className='md:text-3xl font-bold text-2xl hover:text-3xl text-center md:hover:text-4xl h-10'>{title}</h2>
                <div className='flex justify-center'>
                    <div className='md:w-1/2 w-2/3' >
                            <Carousel infinite={true} autoPlay={true}   responsive={responsive}>
                              
                                {renderItemAwareness()}

                            </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

