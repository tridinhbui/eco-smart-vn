import React from 'react'
import { ACHIEVE_HOMEPAGE } from '../../config/api'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faHandshake,
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from 'react-i18next'


export default function Achievement() {
  const {t} = useTranslation();

  const arrIcon = [faMedal, faHandshake, faEarthAsia, faMedal]

  const renderModal = () => {
    return ACHIEVE_HOMEPAGE.list_modal.map((item, index) => {
      return (
        <div className='w-full flex-col text-center md:space-y-3 space-x-1' key={index}>
          <FontAwesomeIcon icon={arrIcon[index]} style={{ fontSize: 40, color: "#008001" }} />
          <p className='md:text-5xl text-2xl font-bold'>{item.amount}</p>
          <p>{item.title}</p>
        </div>
      )
    })
  }

  return (
    <div className="achieve container mx-auto">
      <h2 className='text-center md:text-4xl text-3xl font-bold'>{t(`achieveHome.title`)}</h2>
      <div className="modal grid grid-cols-4 mt-10">

        {renderModal()}

      </div>
    </div>
  )
}
