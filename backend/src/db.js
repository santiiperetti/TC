const Sequelize = require('sequelize');
const { format } = require('sql-formatter');
require('dotenv').config();

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

const sequelize = new Sequelize(
  process.env.DB_NAME || 'TC_Stats',
  process.env.DB_USER || 'sa',
  process.env.DB_PASS || 'tu_clave',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mssql',
    logging: customLogger,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    },
  }
);

async function conectarDB() {
  try {
    await sequelize.authenticate();
    console.log('🏁 Conexión a la base de datos TC_Stats establecida con éxito.');
  } catch (error) {
    console.error('💥 Error crítico al conectar al motor SQL:\n', error);
  }
}

function enableDbLog() {
  sequelize.options.logging = customLogger;
}

function disableDbLog() {
  sequelize.options.logging = false;
}

module.exports = sequelize;
module.exports.conectarDB = conectarDB;
module.exports.enableDbLog = enableDbLog;
module.exports.disableDbLog = disableDbLog;
module.exports.default = sequelize;
