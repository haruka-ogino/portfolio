import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import CVDocument from './components/CVDocument'
import Home from './components/Home'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/cv" element={<CVDocument />} />
  </Route>
)
