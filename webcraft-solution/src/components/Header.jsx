
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">

        <a className="navbar-brand fw-bold fs-4" href="#home">
          Webcraft <span className="text-primary">Solution</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                Accueil
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projets
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#courses">
                Formations
              </a>
            </li>

            <li className="nav-item">
              <a className="btn btn-primary px-2" href="#courses">
                Découvrir nos formations
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
