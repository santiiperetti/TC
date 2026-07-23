function Home() {
  return (
    <main className="home-panel">
      <div className="home-grid">
        <div className="home-image-wrapper">
          <img
            src="https://i.imgur.com/msxar2O.jpeg"
            alt="Turismo Carretera"
            className="home-image"
          />
        </div>
        <div className="home-text">
          <h2>Bienvenido a Stats Turismo Carretera</h2>
          <p>
            Bienvenido a la base de datos del Turismo Carretera. Explorá estadísticas, resultados históricos y los perfiles de todos los pilotos de la máxima.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
