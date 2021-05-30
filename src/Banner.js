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
        <div style={{ fontFamily: 'sans-serif' }} className=' wrap wrapper'>
          <h1>
            I’m <span style={{ color: '#d6b59b' }}>Aditya Mali</span>
          </h1>
          <h2>I'm a full-stack web developer</h2>

          <h4>from Pune, Maharashtra</h4>
          <hr />

          <button className='btn ' onClick={openModal}>
            <FaTelegramPlane /> GET IN TOUCH
          </button>
        </div>
      </section>
    </>
  )
}

export default Banner
