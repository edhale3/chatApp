'use strict';

module.exports = {
    up: (queryInterface, Sequelize)=> {
        return queryInterface.createTable('Users', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },              
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },          
            username: {
                allowNull: true,
                type: Sequelize.STRING
            },
            firstname: {
                allowNull: true,
                type: Sequelize.STRING
            },
            lastname: {
                allowNull: true,
                type: Sequelize.STRING
                
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            // picture: {
            //     type: Sequelize.BLOB,
            //     allowNull: true
            // }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users')
    }
};