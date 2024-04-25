export default function Home() {
  return (
    <div className="main">
      <div className="intro">
        <p>Hi there, I&apos;m</p>
        <h1>Haruka Ogino</h1>
        <p>Full-stack Developer</p>
      </div>
      <aside className="sections">
        <button>About Me</button>
        <button>Projects</button>
        <button
          onClick={() => {
            window.open('/Haruka-Ogino-CV.pdf', '_blank')
          }}
        >
          My CV
        </button>
      </aside>
    </div>
  )
}
