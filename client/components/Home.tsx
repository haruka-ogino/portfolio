import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <section className="main">
      <div className="intro">
        <p>Hi there, I&apos;m</p>
        <h1>Haruka Ogino</h1>
        <p>Full-stack Developer</p>
      </div>
      <aside className="sections">
        <button onClick={() => navigate('about')}>About Me</button>
        <button onClick={() => navigate('projects')}>Projects</button>
        <button
          onClick={() => {
            window.open('/Haruka-Ogino-CV.pdf', '_blank')
          }}
        >
          My CV
        </button>
      </aside>
    </section>
  )
}
