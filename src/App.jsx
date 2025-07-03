import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Particuliers from "./pages/Particuliers.jsx";
import Professionnels from "./pages/Professionnels.jsx";
import SerenaEnergie77 from "./pages/SerenaEnergie77.jsx"; // 👈 Ajout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/particuliers" element={<Particuliers />} />
        <Route path="/professionnels" element={<Professionnels />} />
        <Route path="/serenaenergie77" element={<SerenaEnergie77 />} /> {/* 👈 Ajout */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

