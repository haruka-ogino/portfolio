export default function Home() {
  const handleClick = (id: string) => {
    const heading = document.getElementById(id)
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="main">
      <div className="intro">
        <p>Hi there, I&apos;m</p>
        <h1>Haruka Ogino</h1>
        <p>Full-stack Developer</p>
      </div>
      <aside className="sections">
        {/* <button onClick={() => navigate('about')}>About Me</button> */}
        <button onClick={() => handleClick('about')}>About Me</button>
        <button onClick={() => handleClick('projects')}>Projects</button>
        <button
          onClick={() => {
            window.open('/Haruka-Ogino-CV.pdf', '_blank')
          }}
        >
          {/* <button onClick={this.handleClick}>Go to Haruka's Blog</button> */}
          My CV
        </button>
      </aside>
    </section>
  )
}
