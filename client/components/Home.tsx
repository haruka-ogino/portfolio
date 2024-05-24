import { useNavigate } from 'react-router-dom'
import About from './About'
import Projects from './Projects'

export default function Home() {
  const handleClick = (id: string) => {
    const heading = document.getElementById(id)
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const navigate = useNavigate()
  function handleNavigate(link: string) {
    navigate(`/${link}`)
  }
  return (
    <>
      <section className="main" id="intro">
        <div className="intro">
          <p>Hi there, I&apos;m</p>
          <h1>Haruka Ogino</h1>
          <p>Full-stack Developer</p>
        </div>
        <aside className="sections">
          <button onClick={() => handleClick('about')}>About Me</button>
          <button onClick={() => handleClick('projects')}>Projects</button>
          <button onClick={() => handleNavigate('blog')}>Blog Entries</button>
        </aside>
      </section>
      <About />
      <Projects />
    </>
  )
}
