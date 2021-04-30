import React from 'react'
import './projects.css'
import { projects } from './projectsdata'
const Projects = () => {
  return (
    <div className='container'>
      <div className='row'>
        {projects.map((project) => {
          const { id, imgUrl, title, url, desc } = project
          return (
            <div className='col'>
              <div key={id} className='card'>
                <img src={imgUrl} className='card-img-top' alt={title} />
                <div className='card-body'>
                  <p style={{ color: 'black' }} className='card-text'>
                    {title}
                  </p>
                  <div class='overlay'>
                    <div class='text'>
                      <h4>{desc}</h4>

                      <a
                        className='btn'
                        href={url}
                        style={{
                          color: 'white',
                          fontSize: '0.8rem',
                          marginTop: '1px',
                        }}
                      >
                        preview
                      </a>
                    </div>
                  </div>
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
