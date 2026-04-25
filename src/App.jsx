import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CaseDecks from './pages/CaseDecks';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Resumes from './pages/Resumes';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-decks" element={<CaseDecks />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resumes" element={<Resumes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
