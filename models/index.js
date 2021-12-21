// import models
const User = require('./User');
const Review = require('./Review');
const Game = require('./Game');
const Comment = require('./Comment');


User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.hasMany(Comment, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Review, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(Game, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});


module.exports = {
    User,
    Review, 
    Game,
    Comment
}