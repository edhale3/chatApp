'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Messages', 'user_id', {
          type: Sequelize.DataTypes.UUID
        }, {transaction:t}),
        queryInterface.removeColumn('Messages', 'email', {transaction: t})
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Messages', 'user_id', {transaction:t}),
        queryInterface.addColumn('Messages', 'email', {
          type: Sequelize.DataTypes.STRING
        }, {transaction:t})
      ])
    })
  }
}
