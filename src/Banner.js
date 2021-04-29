import React from 'react'
import './banner.css'
import { FaTelegramPlane } from 'react-icons/fa'
const Banner = () => {
  return (
    <>
      <section className='banner'>
        <pre className='wrapper'>
          <h1>I’M A FULLSTACK DEVELOPER</h1>
          <h1>I MAKE WEBSITES/WEBAPPS</h1>
          <button className='btn '>
            <span>
              <FaTelegramPlane /> GET IN TOUCH
            </span>
          </button>
        </pre>
      </section>
    </>
  )
}

export default Banner
