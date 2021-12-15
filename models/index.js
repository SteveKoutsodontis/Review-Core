const User = require('./User');
const Review = require('./Review');
const Game = require('./Game');
const Comment = require('./Comment');

//TODO Austin: Comment belongsTo User onDelete: CASCADE

//TODO Steve: Comment belongsTo Review onDelete should delete comments if the review is deleted

//TODO Chris: Review belongsTo Game onDelete of game reviews should also be deleted

module.exports = {
    User,
    Review, 
    Game,
    Comment
}