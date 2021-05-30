import React from 'react'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'
import Navbar from './Navbar'
import Error from './Error'
import Foooter from './Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Foooter />
    </Router>
  )
}

export default App
