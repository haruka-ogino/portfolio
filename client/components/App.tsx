import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <div className="container">
      <Outlet />
      <Nav />
    </div>
  )
}

export default App
