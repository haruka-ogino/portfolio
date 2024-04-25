import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      <a href="/Haruka-Ogino-CV.pdf" target="_blank">
        My CV
      </a>
      {/* <Link to="cv">CV</Link> */}
      <Outlet />
    </div>
  )
}

export default App
