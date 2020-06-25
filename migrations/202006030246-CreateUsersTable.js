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
                type: Sequelize.STRING,
                defaultValue: "John"
            },
            lastname: {
                allowNull: true,
                type: Sequelize.STRING,
                defaultValue: "Doe"
                
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
<<<<<<< HEAD
            messages: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "MESSAGE HERE"
            }
=======
            // picture: {
            //     type: Sequelize.BLOB,
            //     allowNull: true
            // }
>>>>>>> master
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users')
    }
};