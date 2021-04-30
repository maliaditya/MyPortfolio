import React from 'react'
import './banner.css'
import Modal from './Modal'
import { useGlobalContext } from './context'
import { FaTelegramPlane } from 'react-icons/fa'

const Banner = () => {
  const { openModal } = useGlobalContext()
  return (
    <>
      <Modal />

      <section className='banner'>
        <pre className='wrapper'>
          <h1>I’M A FULLSTACK DEVELOPER</h1>
          <h2>I MAKE WEBSITES/WEBAPPS</h2>
          <button className='btn ' onClick={openModal}>
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
