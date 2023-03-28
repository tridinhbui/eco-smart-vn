import React, { useEffect, useState } from 'react'

export default function BackToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setBackToTopButton(!backToTopButton) : setBackToTopButton(false)
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {backToTopButton && <button className='fixed right-6 bottom-6 h-11 w-11 rounded-full text-white' onClick={scrollUp} style={{
        backgroundColor: '#365949',
      }}> <p style={{ transform: 'translate(0px, -1px)', fontSize: '35px' }}>^</p> </button>}
    </div>
  )
}
