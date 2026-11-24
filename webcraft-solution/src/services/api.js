
const PROJECTS_URL = 'https://webcraft-api.vercel.app/data/projects.json';
const COURSES_URL = 'https://webcraft-api.vercel.app/data/courses.json';

async function fetchData(url, property) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  const data = await response.json();

  // Vérifier que les données reçues sont correctes
  const result = Array.isArray(data) ? data : data[property];

  if (!Array.isArray(result)) {
    throw new Error(`Les données ${property} sont invalides.`);
  }

  return result;
}

export function getProjects() {
  return fetchData(PROJECTS_URL, 'projects');
}

export function getCourses() {
  return fetchData(COURSES_URL, 'courses');
}
