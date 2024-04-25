import { Outlet } from 'react-router-dom'
// import Home from './Home'
import About from './About'

function App() {
  return (
    <div className="container">
      <Outlet />
      <About />
    </div>
  )
}

export default App
