const SessionData = JSON.parse(sessionStorage.getItem("UserSession"));
let reviewData;
let comments;

async function reviewInit(){
    const reviewHeader = $("#review-header");
    const reviewText = $("#review-text");
    const reviewRating = $("#review-rating");
    const reviewUser = $("#review-user");
    if (!reviewData){
        if (!alert("No review found returning home.")){
            window.location.href = "/index.html"; 
            return;
        }
    }
    reviewHeader.text(reviewData.review_header);
    reviewText.text(reviewData.review_text);
    reviewRating.text(reviewData.star_rating + " out of 5");
    if (!reviewData.User){
        reviewUser.text("unknown");
    } else {
        reviewUser.text(!reviewData.User.username ? "unknown": reviewData.User.username);
    }
}

function commentsInit(){
    for(let i = 0; i < comments.length; i++){
        generateCommentCards(comments[i], i);
    }
}

async function generateCommentCards(commentData, index){
    //Create elements
    const commentCardEl = $("<div>");
    const usernameEl = $("<h2>");
    const commentTextEl = $("<p>");
    //Add text
    commentTextEl.text(commentData.text);
    //Set attributes
    commentCardEl.attr('id', index+"");
    //Append elements
    commentCardEl.append([usernameEl, commentTextEl]);
    $("#comments-container").append(commentCardEl);
    //Async last
    usernameEl.text(await getUsername(commentData.user_id));
}

async function getUsername(id){
    let response = await fetch('/api/users/'+id);
    response = response.json();
    return response.username;
}

async function init(){
    reviewData = JSON.parse(localStorage.getItem("ReviewData"));
    let response = await fetch('/api/review/'+reviewData.id);
    reviewData = await response.json();
    reviewInit();
    console.log(reviewData.id);
    response = await fetch('/api/comment/'+reviewData.id);
    comments = await response.json();
    commentsInit();
}

const commentFormHandler = function (event) {
    event.preventDefault();
    //Make sure the user is logged in
    if (!SessionData.logged_in)
        if (!alert("You need to be logged in to make comments. Redirecting you to login page.")){
            window.location.href = "/login.html"; 
            return;
        }
    const commentText = $("#comment-text").val();
    let body = {
        text: commentText,
        review_id: reviewData.id,
        user_id: SessionData.user.id
    }
    fetch('/api/comment/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        comments.push(data);
        pushComment();
    })
}

async function pushComment(){
    //Create elements
    const commentCardEl = $("<div>");
    const usernameEl = $("<h2>");
    const commentTextEl = $("<p>");
    //Add text
    commentTextEl.text(comments[comments.length-1].text);
    //Set attributes
    commentCardEl.attr('id', comments.length-1+"");
    //Append elements
    commentCardEl.append([usernameEl, commentTextEl]);
    $("#comments-container").append(commentCardEl);
    //Async last
    console.log(comments);
    usernameEl.text(await getUsername(comments[comments.length-1].user_id));
}

$("#comment-form").on('submit', commentFormHandler);

init();