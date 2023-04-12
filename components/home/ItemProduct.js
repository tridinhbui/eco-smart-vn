import React from 'react'
import style from '../../styles/ProductHomePage.module.css'

export default function ItemProduct( {id, product, t} ) {

  const renderItemProduct = () => {
    return product.details.map((_, index) => {
      return <p key={index}>{t(`productsHome.${id}.details.${index}`)}</p>
    })
  }
  
  return (
    <div className={`${style.cardofproduct} rounded-xl sm:mx-3`}>
    <div className={`${style.card__face} ${style.card__face__front}`}>
      <img src={product.img} alt="product-homepage" className='w-full object-cover rounded-2xl h-80' />
    </div>
    <div className={`${style.card__face}  ${style.card__face__back} md:space-y-5 md:pt-10 pt-3`}>
      {renderItemProduct()}
    </div>
  </div>
  )
}
