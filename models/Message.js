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
            type: DataTypes.BLOB,
            allowNull: false
        },
        email: {
            type: DataTypes.UUID,
            allowNull: true,
        }
    });

    Message.associate = (models) => {
        Message.belongsTo(models.Users, { foreignKey: 'user_id'})
        //, {targetKey: 'messages'}
    }
    return Message
}
