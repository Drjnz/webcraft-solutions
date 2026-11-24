
import { useState } from 'react';

function InscriptionForm({ course }) {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: ''
  });

  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log('Inscription :', {
      ...formData,
      formation: course?.title
    });

    setMessage('Votre demande d’inscription a bien été enregistrée !');

    setFormData({
      nom: '',
      email: '',
      telephone: ''
    });
  }

  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="fw-bold mb-3">S'inscrire à une formation</h4>

      {message && (
        <div className="alert alert-success">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom complet</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Adresse e-mail</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Téléphone</label>
          <input
            type="tel"
            name="telephone"
            className="form-control"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Envoyer mon inscription
        </button>
      </form>
    </div>
  );
}

export default InscriptionForm;
