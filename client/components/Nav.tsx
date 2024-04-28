export default function Nav() {
  const handleClick = (id: string) => {
    const heading = document.getElementById(id)
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLink = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <nav id="nav">
      <button onClick={() => handleClick('intro')}>Back to the top</button>
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
    </nav>
  )
}
