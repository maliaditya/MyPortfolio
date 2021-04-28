import React from 'react'
import './skills.css'
import data from './skilldata'
import Tech from './Tech'

const Skills = () => {
  const skill = React.useState(data)
  // const categories = React.useState([])
  return (
    <div className='section-head'>
      <div className='header'>
        <h3>My Skills</h3>
        <hr />
        <Tech tech={skill}></Tech>
      </div>
    </div>
  )
}

export default Skills
