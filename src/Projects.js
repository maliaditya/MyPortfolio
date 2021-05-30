import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import './projects.css'
// import { projects } from './projectsdata'

const url = 'https://adityasite.herokuapp.com/projects/'

const Projects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const fetchProjects = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const projects = await response.json()
      console.log(projects)

      setLoading(false)
      setProjects(projects)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProjects()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <div className='container'>
      <div className='row'>
        {projects.map((project) => {
          const { id, image, title, url, desc, code } = project
          return (
            <div className='col'>
              <div key={id} className='card'>
                <img src={image} className='card-img-top' alt={title} />
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
                        Preview
                      </a>
                      <span> </span>
                      <span> </span>
                      <a
                        className='btn'
                        href={code}
                        style={{
                          color: 'white',
                          fontSize: '0.8rem',
                          marginTop: '1px',
                        }}
                      >
                        CODE
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
