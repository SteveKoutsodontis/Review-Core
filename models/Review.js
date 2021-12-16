// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/config.js');

// Initialize Review model (table) by extending off Sequelize's Model class
class Review extends Model { }

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        review_header: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        review_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        star_rating: {
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
        sequelize
    }
)

module.exports = Review;