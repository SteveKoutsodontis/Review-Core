//TODO: Log out
const reviewRowEl = $("#review-row");
const REVIEWPAGEURL = '/reviewPage.html';
const SessionData = JSON.parse(sessionStorage.getItem("UserSession"));
let reviews = [];

function init(){
    getReviews();
    if (SessionData)
        $("#username-display").text(!SessionData.user.username ? "Not logged in" : SessionData.user.username);
}

function getReviews(){
    fetch ('api/review/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        reviews = data;
        console.log(reviews);
        generateReviewCards();
    })
    .catch(err => {
        console.error(err);
    });
}

async function generateReviewCards(){
    for (let i = 0; i < reviews.length; i++){
        //Creating Elements
        let reviewAnchorEl = $("<a>");
        let reviewDivColEl = $("<div>");
        let reviewCardEl = $("<div>");
        let gameNameEl = $("<h2>");
        let reviewTitleEl = $("<h3>");
        let reviewTextEl = $("<p>");
        //Adding Text
        reviewTitleEl.text(reviews[i].review_header);
        reviewTextEl.text(reviews[i].review_text);
        //Adding attributes
        reviewDivColEl.attr('class', 'col-12');
        reviewCardEl.attr("class", "review");
        reviewAnchorEl.attr("id", i+"");
        //Make elements unclickable
        reviewDivColEl.attr('class', reviewDivColEl.attr('class') + " unclickable");
        reviewCardEl.attr('class', reviewCardEl.attr('class') + " unclickable");
        reviewTitleEl.attr('class', reviewTitleEl.attr('class') + " unclickable");
        reviewTextEl.attr('class', reviewTextEl.attr('class') + " unclickable");
        gameNameEl.attr('class', gameNameEl.attr('class') + " unclickable");
        // Append elements
        reviewCardEl.append([gameNameEl, reviewTitleEl, reviewTextEl]);
        reviewDivColEl.append(reviewCardEl);
        reviewAnchorEl.append(reviewDivColEl);
        reviewRowEl.append(reviewAnchorEl);
        //Async at the end
        gameNameEl.text(await getGameName(reviews[i].game_id));
    }
}

async function getGameName(id){
    if (!id) {return "Game N/A"}
    const response = await fetch('/api/game/'+id);
    let gameData = await response.json();
    console.log(gameData);
    return gameData.name;
}

init();
$("#review-row").on('click', (event) => {
    if (event.target.tagName !== "A") { return; }
    localStorage.setItem("ReviewData", JSON.stringify(reviews[event.target.id]));
    window.location.href = REVIEWPAGEURL;
});