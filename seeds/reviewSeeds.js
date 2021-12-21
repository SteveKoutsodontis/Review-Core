const { Review } = require('../models');

const reviewData = [
{
    review_header:'reviewheader',
    review_text: 'reviewtext',
    star_rating: '2 out of 5',
},
{
    review_header:'reviewheader2222',
    review_text: 'reviewtex22222t',
    star_rating: '4 out of 5',
},
{
    review_header:'reviewheader33333',
    review_text: 'reviewtex3333t',
    star_rating: '5 out of 5',
},
{
    review_header:'reviewheade44444r',
    review_text: 'reviewtex4444t',
    star_rating: '3 out of 5',
}
  
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
