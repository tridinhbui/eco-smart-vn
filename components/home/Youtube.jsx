import React from 'react'
import {YOUTUBE_HOMEPAGE} from '../../config/api'

export default function Youtube() {
    return (
        <figure className='container mx-auto flex-col justify-center'>
            <figcaption className='text-center text-xl md:px-0 px-8 hover:text-2xl md:text-3xl font-bold h-10 md:hover:text-4xl text-gray-800'>{YOUTUBE_HOMEPAGE.title}</figcaption>
            <iframe  height={415} width={450} className='text-center py-8 mx-auto' src={YOUTUBE_HOMEPAGE.youtube} title="YouTube video player"  />
        </figure>
    )
}
