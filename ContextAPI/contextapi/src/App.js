import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js';
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import Pagina3 from "./pages/Pagina3";
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Pagina1" element={<Pagina1 />} />
          <Route path="/Pagina2" element={<Pagina2 />} />
          <Route path="/Pagina3" element={<Pagina3 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
