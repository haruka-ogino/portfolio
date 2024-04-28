export default function Nav() {
  const handleLink = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <nav id="nav" className="sections">
      <button onClick={() => handleLink('https://github.com/haruka-ogino')}>
        My GitHub
      </button>
      <button
        onClick={() =>
          handleLink('https://nz.linkedin.com/in/haruka-ogino-769540148')
        }
      >
        My LinkedIn
      </button>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to the top
      </button>
    </nav>
  )
}
