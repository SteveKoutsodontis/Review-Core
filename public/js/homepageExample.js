const { response } = require("express");
const { get } = require("express/lib/response");
const res = require("express/lib/response");

const reviewBoxEl = $("#reviewBox");

reviewBoxEl.on('click', (event)=>{
    if (event.target.tagName !== "A"){return;}
    localStorage.setItem("ReviewData" + reviews[event.target.id]);
    window.replace("");
}, true);

let reviews = [];

function init(){
    getReviews();
    generateReviewCards();
}

function getReviews(){
    fetch ('api/review/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        reviews = data;
    })
    .catch(err => {
        console.error(err);
    });
}
/*
    reviews: [
        {
            id: 1,
            title,
            text,
            comments: [
                {
                    id,
                }
            ]
        }
    ]
*/

function generateReviewCards(){
    for (let i = 0; i <= reviews.length; i++){
        let reviewAnchorEl = $("<a>");
        let reviewCardEl = $("<div>");
        reviewCardEl.attr("class", "review");
        reviewCardEl.attr("id", i+"");
        let reviewTitleEl = $("<h3>");
        let reviewTextEl = $("<p>");
        reviewTitleEl.text(reviews[i].title);
        reviewTextEl.text(reviews[i].text);
        //Append all elements respectively
    }
}

init();
