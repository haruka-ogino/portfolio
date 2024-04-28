export default function Nav() {
  const handleClick = (id: string) => {
    const heading = document.getElementById(id)
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return <button onClick={() => handleClick('projects')}>About Me</button>
}
