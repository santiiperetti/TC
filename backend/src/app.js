const express = require('express');
const cors = require('cors');
const { conectarDB } = require('./db.js');
const pilotosRoutes = require('./routes/pilotosRoutes.js');
const autodromosRoutes = require('./routes/autodromosRoutes.js');
const resultadosRoutes = require('./routes/resultadosRoutes.js');
const { searchPilotos } = require('./controllers/pilotoController.js');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/pilotos/buscar', searchPilotos);
app.use('/api/pilotos', pilotosRoutes);
app.use('/api/autodromos', autodromosRoutes);
app.use('/api/resultados', resultadosRoutes);

app.get('/', (req, res) => {
  res.send('<h1>API TC Stats - Funcionando 🏎️💨</h1>');
});

async function start() {
  try {
    await conectarDB();

    app.listen(PORT, () => {
      console.log(`Servidor de estadísticas corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error fatal al conectar a SQL Server:\n', error);
    process.exit(1);
  }
}

start();