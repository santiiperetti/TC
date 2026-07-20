import express from 'express';
import cors from 'cors';
import { conectarDB } from './db.js'; // Solo importamos la conexión, no la sincronización
//import masterRouter from './routes/indexRoute.js';
//import { errorHandler } from './middlewares/manejoErrores.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// CORS configurado perfecto para cuando armes el frontend con Vite
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Acá van a vivir tus rutas reales (ej: /api/pilotos)
//app.use('/api', masterRouter);
//app.use(errorHandler);

// Ruta de prueba para ver si el servidor respira
app.get('/', (req, res) => {
  res.send('<h1>API TC Stats - Funcionando 🏎️💨</h1>');
});

// Iniciar servidor
async function start() {
  try {
    // Solo probamos que las credenciales de SQL Server estén bien
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