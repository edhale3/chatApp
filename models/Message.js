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
    });

    return Message
}
// to be put in User.js

// 'use strict'

// module.exports = (sequelize, DataTypes) => {
//     var User = sequelize.define('User', {
//         id: {
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4,
//             allowNull: false,
//             primaryKey: true
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     });

//     return User
// }