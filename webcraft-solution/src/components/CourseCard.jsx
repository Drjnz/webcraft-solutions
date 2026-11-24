
function CourseCard({ course, details }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={course.image}
        className="card-img-top"
        alt={course.title}
        style={{ height: '220px', objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column">
        <span className="badge bg-success align-self-start mb-2">
          {course.category}
        </span>

        <h5 className="card-title fw-bold">{course.title}</h5>

        <p className="card-text text-secondary">
          {course.description}
        </p>

        <div className="mb-3">
          <p className="mb-1">
            <i className="bi bi-bar-chart me-2"></i>
            Niveau : {course.level}
          </p>

          <p className="mb-1">
            <i className="bi bi-clock me-2"></i>
            Durée : {course.duration}
          </p>

          <p className="mb-1">
            <i className="bi bi-person me-2"></i>
            Formateur : {course.instructor}
          </p>
        </div>

        <div className="mb-3">
          {course.technologies?.map((tech, index) => (
            <span
              key={index}
              className="badge bg-light text-dark border me-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-bold text-primary fs-5">
              {course.price} €
            </span>

            <span className="text-warning">
              <i className="bi bi-star-fill me-1"></i>
              {course.rating}/5
            </span>
          </div>

          <p className="text-muted small">
            {course.students} étudiants inscrits
          </p>

          <button
            className="btn btn-primary w-100"
            onClick={() => details(course)}
          >
            Découvrir la formation
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
