import React from 'react'
//import { useEffect } from 'react'
import styles from '../../styles/feedback.module.css'
import { TbChristmasTree } from 'react-icons/tb'
import Script from 'next/script'
//import $ from "jquery"

export default function Products() {
  return (
   <div className = {styles.fb_body}>
      <div className={styles.fb_slide}>
      <button className={styles.fb_slide_btn}>
        <p className={styles.fb_title}>
          Provide feedback <TbChristmasTree/> 
        </p>
      </button>
    </div>

    {/*<div className={styles.fb_content}>
      <div className={styles.fb_content_right}>
        <TbChristmasTree/> 
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
  </div>*/}

    <Script
      src="https://code.jquery.com/jquery-3.5.1.js"
      integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
      crossorigin="anonymous"
    />

    <Script
      src="https://kit.fontawesome.com/550795c27f.js"
      crossorigin="anonymous"
    />

   </div>
  )
}