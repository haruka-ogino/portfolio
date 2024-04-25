export default function Projects() {
  return (
    <div id="projects" className="text">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <img
            src="https://www.ghibli-museum.jp/en/img/mainimg.png"
            alt="ghibli character"
          />
          <div className="description">
            <a href="https://ghibli-things.devacademy.nz/">
              <h3>All the Ghibli Things!</h3>
            </a>
            <a href="https://github.com/haruka-ogino/Ghibli-Things">
              <p>GitHub Repository</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
