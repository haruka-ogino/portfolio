// import { PDFViewer } from '@react-pdf/renderer'
import { Link } from 'react-router-dom'
import CVDocument from './CVDocument'

function App() {
  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      {/* <CVDocument /> */}
      <Link to="cv">CV</Link>
    </div>
  )
}

export default App
