import React from 'react'
import './projects.css'
const Projects = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='column'>
          <div className='card' style={{ width: '18rem' }}>
            <img
              src='https://res.cloudinary.com/dswrobbrp/image/upload/v1618923768/patrick-pahlke-G7wgKn7j_Rs-unsplash_gvruns.jpg'
              className='card-img-top'
              alt='Photography Website'
            />
            <div className='card-body'>
              <p className='card-text'>Photography Website</p>
              <a
                className='btn'
                href='http://aditya1998.pythonanywhere.com/'
                style={{ color: 'black', fontSize: '0.8rem' }}
              >
                preview
              </a>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card' style={{ width: '18rem' }}>
            <img
              src='https://res.cloudinary.com/dswrobbrp/image/upload/v1619742060/taras-shypka-86b0GW7aLUw-unsplash_ou4wpm.jpg'
              className='card-img-top'
              alt='Online editor'
            />
            <div className='card-body'>
              <p className='card-text'>Online Editor</p>
              <a
                className='btn'
                href='https://radiant-ridge-17248.herokuapp.com/'
                style={{ color: 'black', fontSize: '0.8rem' }}
              >
                preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
