// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const bycrypt = require('bcrypt');
// Import our database connection from config.js
const sequelize = require('../config/config.js');
// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model { 
    checkPassword(loginPw){
        return bycrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.INTEGER,
           references: {
            model: 'User',
            key: 'id'
           }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bycrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bycrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true
    }
)

module.exports = User;