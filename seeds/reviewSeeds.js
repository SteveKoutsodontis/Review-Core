const { Review } = require('../models');

const reviewData = [
{
    review_header:'reviewheader',
    review_text: 'reviewtext',
    star_rating: 'star rating',
},
{
    review_header:'reviewheader2222',
    review_text: 'reviewtex22222t',
    star_rating: 'star ratin2222g',
},
{
    review_header:'reviewheader33333',
    review_text: 'reviewtex3333t',
    star_rating: 'star rating3333',
},
{
    review_header:'reviewheade44444r',
    review_text: 'reviewtex4444t',
    star_rating: 'star rating444',
}
  
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
