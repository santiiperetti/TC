import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPilotos, searchPilotos } from '../api/tcApi.js';

function PilotosPage() {
  const [allPilotos, setAllPilotos] = useState([]);
  const [pilotos, setPilotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function cargarPilotos() {
      try {
        setLoading(true);
        setError('');

        const { data } = await getPilotos();
        const lista = Array.isArray(data) ? data : [];
        setAllPilotos(lista);
        setPilotos(lista);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los pilotos.');
      } finally {
        setLoading(false);
      }
    }

    cargarPilotos();
  }, []);

  useEffect(() => {
    const texto = query.trim();

    const timer = setTimeout(async () => {
      if (!texto) {
        setPilotos(allPilotos);
        return;
      }

      try {
        setError('');
        const { data } = await searchPilotos(texto);
        setPilotos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError('No se pudo realizar la búsqueda.');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, allPilotos]);

  if (loading) {
    return <section className="page-card">Cargando pilotos...</section>;
  }

  if (error) {
    return <section className="page-card text-danger">{error}</section>;
  }

  return (
    <section className="page-card">
      <div className="searchbar-wrapper">
        <input
          type="text"
          className="pilotos-search"
          placeholder="Buscar piloto por nombre o apellido"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {pilotos.length === 0 ? (
        <p className="empty-results">No se encontraron pilotos para tu búsqueda.</p>
      ) : (
        <div className="pilotos-grid">
          {pilotos.map((piloto) => (
            <Link
              key={piloto.id_piloto}
              to={`/pilotos/${piloto.id_piloto}`}
              className="piloto-card"
            >
              <img
                src={piloto.url_foto || 'https://via.placeholder.com/300x260?text=Sin+foto'}
                alt={`${piloto.nombre} ${piloto.apellido}`}
                className="piloto-image"
              />
              <div className="piloto-info">
                <h3>{piloto.nombre}</h3>
                <p>{piloto.apellido}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default PilotosPage;
