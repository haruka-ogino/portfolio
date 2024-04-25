import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import CVDocument from './components/CVDocument'
import Home from './components/Home'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="cv" element={<CVDocument />} />
  </Route>
)

export const router = createBrowserRouter(routes)
