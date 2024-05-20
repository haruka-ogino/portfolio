import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogPage from './components/BlogPage'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="blog" element={<Blog />} />
    <Route path="blog/:entry" element={<BlogPage />} />
  </Route>
)
