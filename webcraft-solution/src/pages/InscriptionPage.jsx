import { Link } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import InscriptionForm from "../components/InscriptionForm.jsx";

function InscriptionPage() {
  return (
    <div>
      <Header />

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            <div className="text-center mb-4">
              <h1 className="fw-bold">Inscription</h1>

              <p className="text-muted">
                Remplissez le formulaire ci-dessous pour effectuer
                votre demande d'inscription.
              </p>
            </div>

            <InscriptionForm />

            <div className="text-center mt-4">
              <Link to="/" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>
                Retour à l'accueil
              </Link>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default InscriptionPage;