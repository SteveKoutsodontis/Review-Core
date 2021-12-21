// todo: store review in local storage
// use sample data to create review.js
// use from index.js  ReviewData for the local storage
// functionality of review page. and to set comments below the review.


// Get the data from our database 
// and then dynamically create a card for each review.
// 1. have a element to the html that the review will go. 

async function getReviews() {
    const response = await fetch('/api/review')
    const reviews = await response.json()
    console.log(reviews)
    const all_reviews_div = document.getElementById('all_reviews')
    reviews.forEach((review) => {
        const reviewContainer = document.createElement('div')
        const reviewHeaderEl = document.createElement('h2')
        const reviewTextEl = document.createElement('p')
        const reviewRatingEl = document.createElement('h3')
        const reviewUserEl = document.createElement('h4')

        reviewHeaderEl.textContent = review.review_header
        reviewTextEl.textContent = review.review_text
        reviewRatingEl.textContent = review.star_rating
        reviewUserEl.textContent = review.user_id

        reviewContainer.append(reviewHeaderEl)
        reviewContainer.append(reviewTextEl)
        reviewContainer.append(reviewRatingEl)
        reviewContainer.append(reviewUserEl)



        all_reviews_div.append(reviewContainer)

    })
}

getReviews();



const homeBtn = document.getElementById('home')
function goToHome() {
   // fetch('/')
    window.location.replace('/index')
}


homeBtn.addEventListener('click', goToHome)
