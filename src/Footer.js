import React from 'react'
import './footer.css'

import { social } from './data'

const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <hr style={{ width: '20rem' }} />
      <br />
      <br />
      <center>
        <span className='media-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <span key={id}>
                <a href={url}> {icon}</a>
              </span>
            )
          })}
        </span>
      </center>
      <center>Handcrafted by me &copy; 2021</center>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Footer
