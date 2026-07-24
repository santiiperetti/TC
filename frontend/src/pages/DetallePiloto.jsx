import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPilotoById } from '../api/tcApi.js';

function calcularEdad(fechaNacimiento) {
  if (!fechaNacimiento) {
    return 'No disponible';
  }

  const fecha = new Date(fechaNacimiento);

  if (Number.isNaN(fecha.getTime())) {
    return 'No disponible';
  }

  const hoy = new Date();
  let edad = hoy.getFullYear() - fecha.getFullYear();
  const diferenciaMes = hoy.getMonth() - fecha.getMonth();

  if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < fecha.getDate())) {
    edad -= 1;
  }

  return `${edad} años`;
}

function formatearFecha(fecha) {
  if (!fecha) {
    return 'No disponible';
  }

  const fechaDate = new Date(fecha);

  if (Number.isNaN(fechaDate.getTime())) {
    return 'No disponible';
  }

  return fechaDate.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function DetallePilotoPage() {
  const { id } = useParams();
  const [piloto, setPiloto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function cargarPiloto() {
      try {
        setLoading(true);
        setError('');

        const { data } = await getPilotoById(id);
        setPiloto(data);
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar la información del piloto.');
      } finally {
        setLoading(false);
      }
    }

    cargarPiloto();
  }, [id]);

  if (loading) {
    return <section className="page-card">Cargando piloto...</section>;
  }

  if (error) {
    return <section className="page-card text-danger">{error}</section>;
  }

  if (!piloto) {
    return <section className="page-card">No se encontró el piloto.</section>;
  }

  return (
    <section className="page-card">
      <div className="detalle-layout">
        <div className="detalle-hero">
          <img
            src={piloto.url_foto || 'https://via.placeholder.com/420x500?text=Sin+foto'}
            alt={`${piloto.nombre} ${piloto.apellido}`}
            className="detalle-image"
          />
          <div className="detalle-name-block">
            <h2>{piloto.nombre}</h2>
            <p>{piloto.apellido}</p>
          </div>
        </div>

        <div className="detalle-info">
          <div className="detalle-info-item">
            <span>Edad</span>
            <strong>{calcularEdad(piloto.fecha_nac)}</strong>
          </div>

          <div className="detalle-info-item">
            <span>Fecha de nacimiento</span>
            <strong>{formatearFecha(piloto.fecha_nac)}</strong>
          </div>

          <div className="detalle-info-item">
            <span>Localidad de origen</span>
            <strong>{piloto.ubicacion || piloto.id_localidad || 'No disponible'}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetallePilotoPage;
