const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  

const Formulario = sequelize.define('Formulario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isAlpha: true, 
      },
  },
  telefono: {
    type: DataTypes.STRING(7),
    allowNull: false,
    validate: {
        isNumeric: true, 
        len: [7, 7],
      },
  },
  telefonoMovil: {
    type: DataTypes.STRING(10),
    allowNull: false,
    validate: {
        isNumeric: true,
        len: [10, 10],
        startsWithThree: (value) => {
          if (!value.startsWith('3')) {
            throw new Error('El teléfono móvil debe iniciar con 3.');
          }
        },
      },
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isEmail: true, 
      },
  },
  bodega: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  oficina: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Formulario;