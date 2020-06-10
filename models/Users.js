'use strict'

module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define('Users', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // picture: {
        //     type: DataTypes.BLOB,
        //     allowNull: true
        // }
        // birthday: {
        //     type: DataTypes.STRING,
        //     allowNull:true
        // },

    });
    console.log(DataTypes)
    return Users
}