import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
// import About from './components/About'
// import Projects from './components/Projects'
// import Blog from './components/Blog'
// import BlogEntry from './components/BlogEntry'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    {/* <Route path="about" element={<About />} /> */}
    {/* <Route path="projects" element={<Projects />} /> */}
    {/* <Route path="blog" element={<Blog />} /> */}
    {/* <Route path="blog/:entry" element={<BlogEntry />} /> */}
  </Route>
)
