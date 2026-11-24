
function Loader() {
  return (
    <div className="container py-5 text-center">
      <div
        className="spinner-border text-primary"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="visually-hidden">Chargement...</span>
      </div>

      <h5 className="mt-4 fw-bold">
        Chargement des données
      </h5>

      <p className="text-muted">
        Nous préparons les projets et les formations pour vous...
      </p>
    </div>
  );
}

export default Loader;
