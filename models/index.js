// import models
const User = require('./User');
const Review = require('./Review');
const Game = require('./Game');
const Comment = require('./Comment');


User.hasMany(Review, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Review, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Review.belongsTo(Game, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


//TODO Austin: Comment belongsTo User onDelete: CASCADE

//TODO Steve: Comment belongsTo Review onDelete should delete comments if the review is deleted

//TODO Chris: Review belongsTo Game onDelete of game reviews should also be deleted

module.exports = {
    User,
    Review, 
    Game,
    Comment
}