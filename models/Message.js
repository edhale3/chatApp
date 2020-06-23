'use strict'

module.exports = (sequelize, DataTypes) => {
    var Message = sequelize.define('Message', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.UUID,
            allowNull: false,
        }
    });

    // Message.associate = (models) => {
    //     Message.belongsTo(models.Users, {foreignKey: 'user_id'})
    // }
    return Message
}
