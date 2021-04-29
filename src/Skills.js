import React from 'react'
import './skills.css'
import data from './skilldata'
import Tech from './Tech'
import Categories from './Categories'
const allCategories = [...new Set(data.map((item) => item.category))]

const Skills = () => {
  const [skill, setSkill] = React.useState(data)
  const [categories, setCategories] = React.useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setSkill(data)
      setCategories(allCategories)

      return
    }
    const newItems = data.filter((item) => item.category === category)
    setSkill(newItems)
  }

  return (
    <div className='section-head'>
      <div className='header'>
        <h3>My Skills</h3>
        <hr />
        <Categories categories={categories} filterItems={filterItems} />
        <Tech tech={skill}></Tech>
      </div>
    </div>
  )
}

export default Skills
