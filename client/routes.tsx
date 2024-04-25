import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Hello from './components/Hello'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
  </Route>
)
