'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carrinhos', { 
      id_carrinho: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_produto: { 
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: {
                tableName: 'produtos'
            },
            key: 'id_produto'
        }
      },
      quantidade: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      id_cliente: { 
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: {
                tableName: 'clientes'
            },
            key: 'id_cliente'
        },
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('carrinhos');
  }
};