import React from 'react'

const Tech = ({ tech }) => {
  return (
    <div className='section-center'>
      {tech.map((skill) => {
        const { id, icon, text, colorcode } = skill
        console.log(tech)
        return (
          <article key={id} className='menu-item'>
            <div className='item-info'>
              <header>
                <h4>{text}</h4>

                <h4 style={{ color: colorcode }}>{icon}</h4>
              </header>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Tech
