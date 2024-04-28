export default function Nav() {
  const handleClick = (id: string) => {
    const heading = document.getElementById(id)
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <nav id="nav">
      <button onClick={() => handleClick('projects')}>Projects</button>
    </nav>
  )
}
