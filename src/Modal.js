import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'

import emailjs from 'emailjs-com'
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()

  const onSubmit = (e) => {
    e.preventDefault() // Prevents default refresh by the browser
    // const { REACT_APP_EMAILJS_USERID } = process.env
    emailjs
      .sendForm(
        'gmail',
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        e.target,
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly", result.text)
        },
        (error) => {
          alert('An error occured, Plese try again', error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <form className='form' onSubmit={onSubmit}>
          <div class='input-group input-group-sm mb-3'>
            <span class='input-group-text' id='inputGroup-sizing-sm'>
              Name
            </span>
            <input
              name='name'
              type='text'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-sm'
            />
          </div>
          <br />
          <div class='input-group input-group-sm mb-3'>
            <span class='input-group-text' id='inputGroup-sizing-sm'>
              Subject
            </span>
            <input
              name='subject'
              type='text'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-sm'
            />
          </div>
          <br />
          <div class='input-group input-group-sm mb-3'>
            <span class='input-group-text' id='inputGroup-sizing-sm'>
              Email
            </span>
            <input
              name='email'
              type='text'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-sm'
            />
          </div>

          <br />
          <div class='form-floating'>
            <textarea
              name='message'
              class='form-control'
              placeholder='Leave a comment here'
              id='floatingTextarea2'
              style={{ height: '100px' }}
            ></textarea>
            <label for='floatingTextarea2'>Message</label>
          </div>
          <br />
          <input type='submit' value='Send Message' />
        </form>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}

export default Modal
