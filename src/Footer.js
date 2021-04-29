import React from 'react'
import './footer.css'

import { social } from './data'

const Footer = () => {
  return (
    <div>
      <br />

      <center>
        <span className='media-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <span key={id}>
                <a
                  style={{ color: 'var(--clr-primary-5)', transition: '#fff' }}
                  href={url}
                >
                  {icon}
                </a>
              </span>
            )
          })}
        </span>
        <hr style={{ width: '20rem' }} />
      </center>
      <center>Handcrafted by me &copy; 2021</center>
      <br />
    </div>
  )
}

export default Footer
