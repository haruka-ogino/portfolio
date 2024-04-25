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
            <h3>All the Ghibli Things!</h3>
            <p>
              A fun full-stack web application I worked on using React and
              SQLite alongside Knex.
              <br />
              <br />
              While I have accomplished a lot of my goals for this app, I am
              still constantly working on it. Learn more about my goals on the
              GitHub repo.
            </p>
            <a href="https://ghibli-things.devacademy.nz/">
              <p>https://ghibli-things.devacademy.nz/</p>
            </a>
            <a href="https://github.com/haruka-ogino/Ghibli-Things">
              <p>GitHub repository</p>
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src="https://www.ghibli-museum.jp/en/img/mainimg.png"
            alt="ghibli character"
          />
          <div className="description">
            <h3>Lucas&apos; Mansion</h3>
            <a href="https://lucas-mansion.pushed.nz/">
              <p>https://lucas-mansion.pushed.nz/</p>
            </a>
            <a href="https://github.com/harakeke-2024/Lucas-Mansion">
              <p>GitHub repository</p>
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src="https://www.ghibli-museum.jp/en/img/mainimg.png"
            alt="ghibli character"
          />
          <div className="description">
            <h3>Pet Blog</h3>
            <p>This web application is under construction.</p>
            <a href="https://github.com/harakeke-2024/Lucas-Mansion">
              <p>GitHub repository</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
