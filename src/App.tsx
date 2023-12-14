import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Tecnologia from './pages/Tecnologia/index';
import Cozinha from './pages/Cozinha/index';
import Casa from './pages/Casa/index';
import Header from './components/Header'; // Importe o Header aqui


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/cozinha" element={<Cozinha />} />
        <Route path="/casa" element={<Casa />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;