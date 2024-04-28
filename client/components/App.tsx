import { Outlet } from 'react-router-dom'
// import Home from './Home'
import About from './About'
import Projects from './Projects'
import Nav from './Nav'

function App() {
  return (
    <div className="container">
      <Outlet />
      <Nav />
      <About />
      <Projects />
    </div>
  )
}

export default App
