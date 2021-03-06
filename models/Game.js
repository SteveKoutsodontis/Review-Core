// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/config.js');

// Initialize Game model (table) by extending off Sequelize's Model class
class Game extends Model { }

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        steam_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true
    }
)

module.exports = Game;