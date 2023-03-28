import React from 'react'

export default function ItemSlideShow({ item }) {
  return (
    <div>
      <div className="item p-5 rounded-xl">
        <a href="#">
          <img className='rounded-2xl' src={item} alt="img-slideShow" />
        </a>
      </div>
    </div>
  )
}
