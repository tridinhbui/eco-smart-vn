import React, { useState } from 'react'
import style from '../../styles/processHomePage.module.css'
import { PROCESS_HOMEPAGE } from '../../config/api'


export default function ProcessHomePage() {
  // use hook
  const [banner, setBanner] = useState(PROCESS_HOMEPAGE[0])
  const width = (100 / 5 * (banner.id - 1))

  // handle event
  const handleChangeBanner = (item) => {
    const index = PROCESS_HOMEPAGE.findIndex(ele => ele.id === item.id)
    index !== -1 && setBanner({ ...PROCESS_HOMEPAGE[index] })
  }

  // render ele
  const renderTitleProcess = () => {
    return PROCESS_HOMEPAGE.map((item, index) => {
      return (
        <li onClick={() => handleChangeBanner(item)} key={index} className={style.select}>
          <h2 className="p_inner text-xl font-bold">{item.title}</h2>
        </li>
      )
    })
  }

 // ------------------------------------------------
  return (
    <div className={style.process_head + ' py-28 container mx-auto'}>
      <h2 className='text-center text-4xl hover:text-5xl  h-10 font-bold mb-10'>Quy trình hoạt động - GreenBoost</h2>
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
          <span><i className={`text-9xl ${banner.icon}`}></i></span>
          <h1 className='text-5xl my-7 tracking-widest'>{banner.title_banner}</h1>
          <p className=' italic tracking-wider font-mono leading-9 text-xl'>
            {banner.content}
          </p>
        </section>
      </div>
    </div>
  )
}
