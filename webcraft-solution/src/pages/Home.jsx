import { useState } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FilterBar from "../components/FilterBar.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import CourseCard from "../components/CourseCard.jsx";
import Loader from "../components/Loader.jsx";
import Modal from "../components/Modal.jsx";
import InscriptionForm from "../components/InscriptionForm.jsx";

import useFetch from "../hooks/useFetch.jsx";
import useSearch from "../hooks/useSearch.jsx";

import { getProjects, getCourses } from "../services/api.js";

const projectSearchFields = [
  "title",
  "client",
  "description",
  "category",
  "technologies",
];

// Champs utilisés pour rechercher des formations
const courseSearchFields = [
  "title",
  "description",
  "instructor",
  "category",
  "level",
  "technologies",
];

function Home() {
  const {
    data: projects,
    loading: projectsLoading,
    error: projectsError,
  } = useFetch(getProjects);

  const {
    data: courses,
    loading: coursesLoading,
    error: coursesError,
  } = useFetch(getCourses);

  const projectSearch = useSearch(projects, projectSearchFields);
  const courseSearch = useSearch(courses, courseSearchFields);

  // Gestion des fenêtres modales
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState("");

  function openProjectDetails(project) {
    setSelectedItem(project);
    setModalType("project");
  }

  function openCourseDetails(course) {
    setSelectedItem(course);
    setModalType("course");
  }

  function closeModal() {
    setSelectedItem(null);
    setModalType("");
  }

  const loading = projectsLoading || coursesLoading;

  return (
    <div id="home">
      <Header />

      <Hero />

      {projectsError && (
        <div className="container mt-4">
          <div className="alert alert-danger">
            Erreur lors du chargement des projets : {projectsError}
          </div>
        </div>
      )}

      {coursesError && (
        <div className="container mt-4">
          <div className="alert alert-danger">
            Erreur lors du chargement des formations : {coursesError}
          </div>
        </div>
      )}

      <section id="projects" className="container py-5">
        <h2 className="text-center fw-bold mb-4">Nos projets</h2>

        <SearchBar
          placeholder="Rechercher un projet..."
          onSearch={projectSearch.setSearch}
        />

        <FilterBar
          categories={projectSearch.categories}
          selectedCategory={projectSearch.category}
          onFilter={projectSearch.setCategory}
        />

        {loading ? (
          <Loader />
        ) : (
          <>
            <p className="text-muted mb-4">
              {projectSearch.filteredItems.length} projet(s) trouvé(s)
            </p>

            <div className="row g-4">
              {projectSearch.filteredItems.length > 0 ? (
                projectSearch.filteredItems.map((project) => (
                  <div className="col-md-6 col-lg-4" key={project.id}>
                    <ProjectCard
                      project={project}
                      Details={openProjectDetails}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-4">
                  <p className="text-muted">Aucun projet trouvé.</p>
                </div>
              )}
            </div>
          </>
        )}
      </section>

      <section id="courses" className="container py-5 bg-light">
        <h2 className="text-center fw-bold mb-4">Nos formations</h2>

        <SearchBar
          placeholder="Rechercher une formation..."
          onSearch={courseSearch.setSearch}
        />

        <FilterBar
          categories={courseSearch.categories}
          selectedCategory={courseSearch.category}
          onFilter={courseSearch.setCategory}
        />

        {loading ? (
          <Loader />
        ) : (
          <>
            <p className="text-muted mb-4">
              {courseSearch.filteredItems.length} formation(s) trouvée(s)
            </p>

            <div className="row g-4">
              {courseSearch.filteredItems.length > 0 ? (
                courseSearch.filteredItems.map((course) => (
                  <div className="col-md-6 col-lg-4" key={course.id}>
                    <CourseCard
                      course={course}
                      Details={openCourseDetails}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-4">
                  <p className="text-muted">Aucune formation trouvée.</p>
                </div>
              )}
            </div>
          </>
        )}
      </section>

      <Modal
        show={selectedItem !== null}
        title={
          modalType === "project"
            ? "Détails du projet"
            : "Détails de la formation"
        }
        onClose={closeModal}
      >
        {selectedItem && modalType === "project" && (
          <>
            <h4>{selectedItem.title}</h4>
            <p>{selectedItem.description}</p>

            <h6>Fonctionnalités</h6>
            <ul>
              {selectedItem.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <p>Client : {selectedItem.client}</p>
            <p>
              Technologies : {selectedItem.technologies?.join(", ")}
            </p>
          </>
        )}

        {selectedItem && modalType === "course" && (
          <>
            <h4>{selectedItem.title}</h4>
            <p>{selectedItem.description}</p>

            <h6>Programme de formation</h6>
            <ul>
              {selectedItem.modules?.map((module, index) => (
                <li key={index}>{module}</li>
              ))}
            </ul>

            <p>Niveau : {selectedItem.level}</p>
            <p>Durée : {selectedItem.duration}</p>
            <p>Formateur : {selectedItem.instructor}</p>
            <p>Prix : {selectedItem.price} €</p>

            <hr className="my-4" />

            <InscriptionForm course={selectedItem} />
          </>
        )}
      </Modal>

      <Footer />
    </div>
  );
}

export default Home;