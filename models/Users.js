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
            allowNull: true,
            defaultValue: "Hue Ja"
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "Dick"
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
        messages: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:"MESSAGE HERE"
        }
    });

    Users.associate = (models) => {
        Users.hasMany(models.Message, {foreignKey: 'user_id'})
    }

    return Users
}