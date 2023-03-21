import React from 'react'
import { SPONSORS_HOMEPAGE } from '../../config/api'

export default function Sponsors() {

  const renderListSponsors = () => {
    return SPONSORS_HOMEPAGE.icon_sponsors.map((item, index) => {
      return (
        <a href="#" key={index}>
          <img className='md:w-1/2 w-32 mx-auto my-3' src={item} alt="123" />
        </a>
      )
    })
  }

  return (
    <div className='container mx-auto my-16'>
      <h2 className='text-center md:text-4xl text-3xl my-7 font-bold'>{SPONSORS_HOMEPAGE.title}</h2>
      <div className='md:grid md:grid-cols-4 md:gap-5 mt-10 text-center'>

        {renderListSponsors()}

      </div>
    </div>
  )
}
