// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/config.js');

// Initialize Comment model (table) by extending off Sequelize's Model class
class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        review_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
           references: {
            model: 'User',
            key: 'id'
           }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true
    }
)

module.exports = Comment;