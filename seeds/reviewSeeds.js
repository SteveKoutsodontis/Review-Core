const { Review } = require('../models');

const reviewData = [
{
    review_header:'Dying Light',
    review_text: 'Doing some hardore parkour and killing zombies. Best zombie survival game out there',
    star_rating: '5 out of 5',
},
{
    review_header:'Darkest Dungeon',
    review_text: 'scary to hard i suck at it booo',
    star_rating: '5 out of 5',
},
{
    review_header:'Escape from Tarkov',
    review_text: 'pew pew hide then pew pew some more',
    star_rating: '5 out of 5',
},
{
    review_header:'Batman Arkham Knight',
    review_text: 'Who doesnt want to be Batman running around Gotham beating bad guys up!',
    star_rating: '5 out of 5',
},
{
    review_header:'Little Nightmares',
    review_text: 'Very creepy love the character and the music makes it very intense and spooky',
    star_rating: '5 out of 5',
},
{
    review_header:'Destiny 2',
    review_text: 'Being able to travel to different planets and fight your way through waves of monsters cant get enough',
    star_rating: '5 out of 5',
},
{
    review_header:'Astroneer',
    review_text: 'Stranded on a planet with some buddies building a compound and discovering new minerals and making new equipment. This is to cool',
    star_rating: '5 out of 5',
},
{
    review_header:'Day Z',
    review_text: 'Surviving the Apocalypse simulator pretty insane!',
    star_rating: '5 out of 5',
},
{
    review_header:'Age of Empires 4',
    review_text: 'Great real time strategy game and the campaign is a great history lesson!',
    star_rating: '5 out of 5',
}
  
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
