'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Formularios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      telefono: {
        type: Sequelize.STRING(7),
        allowNull: false,
      },
      telefonoMovil: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bodega: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      oficina: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Formularios');
  },
};