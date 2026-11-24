
function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <h4 className="fw-bold text-primary">
              Webcraft Solution
            </h4>
            <p className="text-secondary">
              Nous créons des solutions numériques innovantes
              et proposons des formations adaptées aux besoins
              du monde professionnel.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white text-decoration-none">
                  Accueil
                </a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="text-white text-decoration-none">
                  Nos projets
                </a>
              </li>
              <li className="mb-2">
                <a href="#courses" className="text-white text-decoration-none">
                  Nos formations
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Suivez-nous</h5>

            <div className="d-flex gap-3">
              <a href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary">
          <p className="mb-0">
            © {new Date().getFullYear()} Webcraft Solution.
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
