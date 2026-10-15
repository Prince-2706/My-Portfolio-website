import TagList from './TagList'

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <p className="section-kicker">PROJECT OVERVIEW</p>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <TagList items={project.stack} />
        <a
          className="button primary"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub <span>&#8599;</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectModal
