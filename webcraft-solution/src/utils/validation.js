// Validation du nom complet
export function validateNom(nom) {
  const value = nom.trim();

  if (!value) {
    return "Le nom complet est obligatoire.";
  }

  if (value.length < 2) {
    return "Le nom doit contenir au moins 2 caractères.";
  }

  if (!/^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u.test(value)) {
    return "Le nom contient des caractères invalides.";
  }

  return "";
}

// Validation de l'adresse e-mail
export function validateEmail(email) {
  const value = email.trim();

  if (!value) {
    return "L'adresse e-mail est obligatoire.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailRegex.test(value)) {
    return "Veuillez saisir une adresse e-mail valide.";
  }

  return "";
}

// Validation du numéro de téléphone
export function validateTelephone(telephone) {
  const value = telephone.trim();

  if (!value) {
    return "Le numéro de téléphone est obligatoire.";
  }

  const digits = value.replace(/\D/g, "");

  if (!/^\+?[0-9\s().-]+$/.test(value) ||
      digits.length < 8 ||
      digits.length > 15) {
    return "Veuillez saisir un numéro de téléphone valide.";
  }

  return "";
}

// Validation complète du formulaire
export function validateInscriptionForm(formData) {
  const errors = {
    nom: validateNom(formData.nom),
    email: validateEmail(formData.email),
    telephone: validateTelephone(formData.telephone),
  };

  return errors;
}