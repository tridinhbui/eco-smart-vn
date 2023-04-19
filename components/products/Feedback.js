import React from 'react'
import { useState } from 'react'
import styles from '../../styles/feedback.module.css'
import { TbChristmasTree } from 'react-icons/tb'
import { TiDelete } from 'react-icons/ti'
//import Script from 'next/script'
//import $ from "jquery"

export default function Products() {
  const [display, setDisplay] = useState("none");
  return (
  <>
    <div className={styles.fb_slide} onClick = {() => setDisplay("block")}>
      <button className={styles.fb_slide_btn}>
        <p className={styles.fb_title}>
        <TbChristmasTree style={{fontSize: "25px", display: "inline"}}/> Provide feedback  
        </p>
      </button>
    </div>

    <div className = {styles.fb_body} style={{display: display}}>
      <div className={styles.fb_content} >
        <div className={styles.fb_content_right}>
          <TiDelete onClick = {() => setDisplay("none")}
            style={{fontSize: "40px", marginTop: "220px", display: display}}/> 
        </div>

        <div className={styles.fb_content_left}>
          <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdZG99r2NmYhJru_FMY1jc8qJwG8dBJJ_pBi7FCjjoJvw7vKQ/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className={styles.fb_form}
          >Đang tải…</iframe>
        </div>
      </div>
    </div>
   </>
  )
}