import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import InscriptionPage from "./pages/InscriptionPage.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscription" element={<InscriptionPage />} />
    </Routes>
  );
}

export default App;