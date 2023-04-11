import React, { useState } from 'react'
import style from '../../styles/processHomePage.module.css'
import { PROCESS_HOMEPAGE } from '../../config/DataPage/HomePageAPI/ProcessAPI'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPersonChalkboard,
  faTty,
  faPeopleGroup,
  faHeadset,
  faListCheck
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from 'react-i18next';


export default function ProcessHomePage() {
  //i18n
  const { t } = useTranslation();

  // use hook
  const [banner, setBanner] = useState(PROCESS_HOMEPAGE.list_process[0])
  const width = (100 / 5 * (banner.id - 1))
  
  const iconArr = [ faSearch, faPersonChalkboard, faTty, faPeopleGroup, faHeadset, faListCheck ]
  const [icon, setIcon] = useState(iconArr[0])

  // handle event
  const handleChangeBanner = (item) => {
    const index = PROCESS_HOMEPAGE.list_process.findIndex(ele => ele.id === item.id)
    index !== -1 && setBanner({ ...PROCESS_HOMEPAGE.list_process[index] })
    setIcon(iconArr[index])
  }

  // render ele
  const renderTitleProcess = () => {
    return PROCESS_HOMEPAGE.list_process.map((item, index) => {
      return (
        <li onClick={() => handleChangeBanner(item)} key={index} className={style.select}>
          <h2 className="p_inner text-xl font-bold">{t(`processHome.processes.${item.title}.title`)}</h2>
        </li>
      )
    })
  }

  // ------------------------------------------------
  return (
    <div className={`hidden md:block py-28 container mx-auto ${style.process_head} `}>
      <h2 className='text-center text-4xl hover:text-5xl  h-10 font-bold mb-10'>{t('processHome.title')}</h2>

      <div className="title_process">
        <ul className="grid grid-cols-6 gap-10 text-center relative px-8">
          
          {renderTitleProcess()}

          <div className={style.line}>
            <span style={{ width: `${width + '%'}` }}></span>
          </div>

        </ul>
      </div>

      <div className={style.banner}>
        <section className={style.section}>
          <FontAwesomeIcon icon={icon} style={{ fontSize: 150, color: "#008001" }} />
          <h1 className='text-5xl my-7 tracking-widest'>{t(`processHome.processes.${banner.title}.title_banner`)}</h1>
          <p className=' italic tracking-wider font-mono leading-9 text-xl'>{t(`processHome.processes.${banner.title}.content`)}</p>
        </section>
      </div>
      
    </div>
  )
}
