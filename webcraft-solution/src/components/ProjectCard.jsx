
function ProjectCard({ project, Details }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={project.image}
        className="card-img-top"
        alt={project.title}
        style={{ height: '220px', objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column">
        <span className="badge bg-primary align-self-start mb-2">
          {project.category}
        </span>

        <h5 className="card-title fw-bold">{project.title}</h5>

        <p className="text-muted small">
          Client : {project.client}
        </p>

        <p className="card-text text-secondary">
          {project.description}
        </p>

        <div className="mb-3">
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className="badge bg-light text-dark border me-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <p className="small text-muted">
            Année : {project.year}
            <br />
            Durée : {project.duration}
          </p>

          <button
            className="btn btn-primary w-100"
            onClick={() => Details(project)}
          >
            Voir les détails
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
