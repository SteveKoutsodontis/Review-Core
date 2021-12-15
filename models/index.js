const User = require('./User');
const Review = require('./Review');
const Game = require('./Game');
const Comment = require('./Comment');

//Comment belongsTo User onDelete: CASCADE

//Comment belongsTo Review onDelete should delete comments if the review is deleted

//Review belongsTo Game onDelete of game reviews should also be deleted

module.exports = {
    User,
    Review, 
    Game,
    Comment
}