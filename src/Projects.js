import React from 'react'
import './projects.css'
import { projects } from './projectsdata'
const Projects = () => {
  return (
    <div className='container'>
      <div className='row'>
        {projects.map((project) => {
          const { id, imgUrl, title, url } = project
          return (
            <div className='column'>
              <div key={id} className='card' style={{ width: '18rem' }}>
                <img src={imgUrl} className='card-img-top' alt={title} />
                <div className='card-body'>
                  <p style={{ color: 'black' }} className='card-text'>
                    {title}
                  </p>
                  <a
                    className='btn'
                    href={url}
                    style={{
                      color: 'black',
                      fontSize: '0.8rem',
                      marginTop: '1px',
                    }}
                  >
                    preview
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Projects
