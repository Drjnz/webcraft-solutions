
function Hero() {
  return (
    <section
      className="text-white py-5"
      style={{
        background: 'linear-gradient(135deg, #0d6efd, #212529)',
        minHeight: '450px'
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">

          <div className="col-lg-7">
            <span className="badge bg-light text-primary mb-3 px-3 py-2">
              Innovation • Technologie • Formation
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Construisons ensemble
              <br />
              votre avenir numérique.
            </h1>

            <p className="lead mb-4">
              Webcraft Solution accompagne les entreprises et les
              apprenants dans leurs projets numériques grâce à des
              solutions innovantes et des formations adaptées.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-light btn-lg text-primary">
                Découvrir nos projets
              </a>

              <a href="#courses" className="btn btn-outline-light btn-lg">
                Nos formations
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <i
              className="bi bi-code-slash"
              style={{ fontSize: '150px' }}
            ></i>

            <h3 className="fw-bold mt-3">
              Créativité & Développement
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
