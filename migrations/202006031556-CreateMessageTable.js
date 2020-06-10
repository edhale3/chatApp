'use strict';

module.exports = {
    up: (queryInterface, Sequelize)=> {
        return queryInterface.createTable('Message', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            message: {
                allowNull: false,
                type: Sequelize.BLOB
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "hello"
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Message')
    }
};
