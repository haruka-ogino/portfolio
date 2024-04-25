import { Outlet } from 'react-router-dom'
// import Home from './Home'
import About from './About'
import Projects from './Projects'

function App() {
  return (
    <div className="container">
      <Outlet />
      <About />
      <Projects />
    </div>
  )
}

export default App
