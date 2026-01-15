import './App.css'
import About from './components/about/about.tsx'
import Projects from './components/projects/projects.tsx'
import Experience from './components/experience/experience.tsx'
import Contact from './components/contact/contact.tsx'
import { Routes, Route } from "react-router-dom";
import { GamePage } from './pages/GamePage.tsx'
import PortfolioLayout from './layout/PortfolioLayout.tsx';



function App() {
  return (
    <Routes>
      {/* Portfolio page */}
      <Route
        path="/"
        element={
          <PortfolioLayout>
            <About />
            <Experience />
            <Projects />
            <Contact />
          </PortfolioLayout>
        }
      />

      {/* Game page — NO portfolio layout */}
      <Route path="/pokemon-game" element={<GamePage />} />
    </Routes>
  );
}

export default App;

