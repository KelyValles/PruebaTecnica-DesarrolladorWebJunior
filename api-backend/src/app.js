import morgan from "morgan";

const express = require('express');

const app = express();
const PORT = 3000;

const Sequelize = require('sequelize');
const config = require('./config/database');
const Formulario = require('./models/Formulario');
const sequelize = new Sequelize(config.development);

app.use(morgan("dev"));
app.use(express.json());

async function testDatabaseConnection() {
    try {
      await sequelize.authenticate();
      console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  }
  
testDatabaseConnection();


sequelize.sync({ force: false })  // Cambia a `true` para recrear la tabla en cada ejecución
  .then(() => {
    console.log('Modelo sincronizado correctamente con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  });

module.exports = sequelize;