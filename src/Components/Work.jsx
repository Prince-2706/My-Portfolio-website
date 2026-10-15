import { projects } from '../data/portfolioData'
import TagList from './TagList'

function Work({ onSelectProject }) {
  return (
    <section id="work" className="work section shell">
      <div className="work-heading">
        <div>
          <p className="section-kicker">03 / SELECTED WORK</p>
          <h2>
            Things I&apos;ve
            <br />
            <em>made.</em>
          </h2>
        </div>
        <p>
          A selection of work that reflects how I approach problems: with clarity, care, and
          curiosity.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.tone}`} key={project.title}>
            <div className="project-visual">
              <span>{project.number}</span>
              <div className="mockup">
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="project-info">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <TagList items={project.stack} />
              <button onClick={() => onSelectProject(project)}>
                View project <span>&#8599;</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work
