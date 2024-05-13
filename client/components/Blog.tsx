export default function Blog() {
  const projects = [
    {
      title: 'First Entry',
      date: '',
      text: '\n\n',
    },
  ]
  return (
    <section className="text" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, i) => (
          <div className="project" key={i}></div>
        ))}
      </div>
    </section>
  )
}
