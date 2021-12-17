const reviewRowEl = $("#review-row");
const REVIEWPAGEURL = '';
const REVIEWCOLCLASS = 'col-12';

document.getElementById("review-row").addEventListener('click', (event) => {
    if (event.target.tagname !== "A") { return; }
    localStorage.setItem("ReviewData" + reviews[event.target.id]);
    //window.replace(REVIEWPAGEURL);
}, true);

let reviews = [];

function init(){
    getReviews();
}

function getReviews(){
    fetch ('api/review/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        reviews = data;
        generateReviewCards();
    })
    .catch(err => {
        console.error(err);
    });
}

function generateReviewCards(){
    for (let i = 0; i < reviews.length; i++){
        //Creating Elements
        let reviewAnchorEl = $("<a>");
        let reviewDivColEl = $("<div>");
        let reviewCardEl = $("<div>");
        let reviewTitleEl = $("<h3>");
        let reviewTextEl = $("<p>");
        //Adding Text
        reviewTitleEl.text(reviews[i].review_header);
        reviewTextEl.text(reviews[i].review_text);
        //Adding attributes
        reviewDivColEl.attr('class', REVIEWCOLCLASS);
        reviewCardEl.attr("class", "review");
        reviewCardEl.attr("id", i+"");
        // Append elements
        reviewCardEl.append([reviewTitleEl, reviewTextEl]);
        reviewDivColEl.append(reviewCardEl);
        reviewAnchorEl.append(reviewDivColEl);
        reviewRowEl.append(reviewAnchorEl);
    }
}

init();