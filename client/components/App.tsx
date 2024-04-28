import { Outlet } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Nav from './Nav'
import CV from './CV'

function App() {
  return (
    <div className="container">
      <Outlet />
      <Nav />
      <About />
      <Projects />
      <CV />
    </div>
  )
}

export default App
