import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGanadoresByYear, getPilotos } from '../api/tcApi.js';

const DEFAULT_YEAR = '2025';
const yearOptions = ['2025', '2024', '2023', '2022', '2021'];

function normalizarTexto(texto) {
  return texto?.toString().trim().toLowerCase();
}

function GanadoresPage() {
  const [selectedYear, setSelectedYear] = useState(DEFAULT_YEAR);
  const [ganadores, setGanadores] = useState([]);
  const [pilotosCatalogo, setPilotosCatalogo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const currentYearValue = selectedYear || DEFAULT_YEAR;

  useEffect(() => {
    async function cargarCatalogoPilotos() {
      try {
        const { data } = await getPilotos();
        setPilotosCatalogo(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      }
    }

    cargarCatalogoPilotos();
  }, []);

  useEffect(() => {
    async function cargarGanadores() {
      try {
        setLoading(true);
        setError('');

        const { data } = await getGanadoresByYear(Number(selectedYear));
        setGanadores(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los ganadores.');
        setGanadores([]);
      } finally {
        setLoading(false);
      }
    }

    cargarGanadores();
  }, [selectedYear]);

  return (
    <section className="page-card">
      <div className="ganadores-controls">
        <label htmlFor="anio-select" className="ganadores-label">
          Año
        </label>
        <select
          id="anio-select"
          className="ganadores-select"
          value={currentYearValue}
          onChange={(event) => setSelectedYear(String(event.target.value))}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="empty-results">Cargando ganadores...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : ganadores.length === 0 ? (
        <p className="empty-results">No hay resultados para el año seleccionado.</p>
      ) : (
        <div className="table-wrapper">
          <table className="ganadores-table">
            <thead>
              <tr>
                <th>Nro. Carrera</th>
                <th>Piloto</th>
                <th>Autódromo</th>
                <th>Ubicación</th>
              </tr>
            </thead>
            <tbody>
              {ganadores.map((ganador) => {
                const pilotoId = ganador.id_piloto ?? pilotosCatalogo.find((piloto) => {
                  const nombreComparacion = `${piloto.apellido}, ${piloto.nombre}`;
                  return normalizarTexto(nombreComparacion) === normalizarTexto(ganador.piloto);
                })?.id_piloto;

                return (
                  <tr key={`${ganador.nro_carrera}-${ganador.piloto}`}>
                    <td>{ganador.nro_carrera}</td>
                    <td>
                      {pilotoId ? (
                        <Link to={`/pilotos/${pilotoId}`} className="ganador-link">
                          {ganador.piloto}
                        </Link>
                      ) : (
                        ganador.piloto
                      )}
                    </td>
                    <td>{ganador.autodromo}</td>
                    <td>{ganador.ubicacion_autodromo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default GanadoresPage;
