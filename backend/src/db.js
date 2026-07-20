import Sequelize from 'sequelize';
import { format } from 'sql-formatter';
import 'dotenv/config'; // Fundamental para leer tus variables de entorno (.env)

// 1. Logger personalizado (¡Queda intacto, es muy bueno!)
const customLogger = (sql) => {
  try {
    const clean = sql.replace(/^Executing\s\([^)]+\):\s/, '');
    if (!clean.includes('$') && !clean.includes('?')) {
      console.log(`\nSQL ejecutado:\n${format(clean)}`);
    } else {
      console.log(`\nSQL:\n${clean}`); 
    }
  } catch (error) {
    console.warn('Error en logger personalizado:', error.message);
    console.log(sql);
  }
};

// 2. Instancia de Sequelize apuntando a tu motor real
const sequelize = new Sequelize(
  process.env.DB_NAME || 'TC_Stats',  // El nombre exacto de tu BD
  process.env.DB_USER || 'sa',        // Tu usuario de SQL Server (suele ser 'sa')
  process.env.DB_PASS || 'tu_clave',  // La contraseña de tu instancia
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mssql', // El dialecto correcto
    logging: customLogger,
    dialectOptions: {
      options: {
        encrypt: true, 
        trustServerCertificate: true // Clave para que no falle en localhost
      }
    }
  }
);

// 3. Función para probar que el motor responde (Solo lectura/autenticación)
async function conectarDB() {
  try {
    await sequelize.authenticate();
    console.log('🏁 Conexión a la base de datos TC_Stats establecida con éxito.');
  } catch (error) {
    console.error('💥 Error crítico al conectar al motor SQL:\n', error);
  }
}

// 4. Funciones para controlar logging
export function enableDbLog() {
  sequelize.options.logging = customLogger;
}

export function disableDbLog() {
  sequelize.options.logging = false;
}

// 5. Exportamos estrictamente lo necesario (¡Sin sync!)
export { conectarDB };
export default sequelize;