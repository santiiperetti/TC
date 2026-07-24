import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PilotosPage from './pages/Pilotos.jsx';
import GanadoresPage from './pages/Ganadores.jsx';
import DetallePilotoPage from './pages/DetallePiloto.jsx';

function PlaceholderPage({ title }) {
  return (
    <section className="p-4 bg-white rounded shadow-sm">
      <h2>{title}</h2>
      <p className="mb-0">Esta página se implementará más adelante.</p>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container py-5">
        <header className="mb-5 text-center header-panel">
          <h1 className="display-5">Stats Turismo Carretera</h1>
          <nav className="menu-box mt-4">
            <ul className="nav justify-content-center flex-column flex-sm-row gap-2">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/pilotos">Pilotos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/ganadores">Ganadores por año</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/resultados">Resultados</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pilotos" element={<PilotosPage />} />
          <Route path="/pilotos/:id" element={<DetallePilotoPage />} />
          <Route path="/ganadores" element={<GanadoresPage />} />
          <Route path="/resultados" element={<PlaceholderPage title="Resultados" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
