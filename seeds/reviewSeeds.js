const { Review } = require('../models');

const reviewData = [
{
    game_id: '17',
    review_header:'My favorite zombie survival game ever',
    review_text: 'Doing some hardore parkour and killing zombies. Best zombie survival game out there',
    star_rating: '5 out of 5',
},
{
    game_id: '11',
    review_header:'Extremely difficult',
    review_text: 'scary to hard i suck at it booo',
    star_rating: '5 out of 5',
},
{
    game_id: '2',
    review_header:'Best shooter looter out there',
    review_text: 'pew pew hide then pew pew some more',
    star_rating: '5 out of 5',
},
{
    game_id: '8',
    review_header:'IM BATMAN!',
    review_text: 'Who doesnt want to be Batman running around Gotham beating bad guys up!',
    star_rating: '5 out of 5',
},
{
    game_id: '19',
    review_header:'Really enjoyed this ',
    review_text: 'Very creepy love the character and the music makes it very intense and spooky',
    star_rating: '5 out of 5',
},
{
    game_id: '1',
    review_header:'pewpewpewpew',
    review_text: 'Being able to travel to different planets and fight your way through waves of monsters cant get enough',
    star_rating: '5 out of 5',
},
{
    game_id: '7',
    review_header:'Astronaut survival',
    review_text: 'Stranded on a planet with some buddies building a compound and discovering new minerals and making new equipment. This is to cool',
    star_rating: '5 out of 5',
},
{
    game_id: '5',
    review_header:'Dont catch a cold',
    review_text: 'Surviving the Apocalypse simulator pretty insane!',
    star_rating: '5 out of 5',
},
{
    game_id: '4',
    review_header:'Crazy Battles!',
    review_text: 'Great real time strategy game and the campaign is a great history lesson!',
    star_rating: '5 out of 5',
}
  
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
