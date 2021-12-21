const gameListEl = $("#game_list");
const sessionData = JSON.parse(sessionStorage.getItem("UserSession"));
// Get our games and render them
let games = [];
let selectedGame;
// Init function does the necessary setup
function init(){
    if (!sessionData.logged_in){
        if (!alert("You must be logged in to create a review. Click OK to be redirected to login page."))
            window.location.replace("/login.html"); return;
    }
    fetch('/api/game/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        games = data;
        generateGameCards();
    })
}
// Generate cards
function generateGameCards(){
    for(let i = 0; i < games.length; i++){
        generateCard(games[i], i);
    }
}
function generateCard(gameData, index){
     //Creating Elements
     let gameCardAnchorEl = $("<a>");
     let gameCardEl= $("<li>");
     let gameImgEl = $("<img>");
     let gameNameEl = $("<p>");
     //Adding Text
     gameNameEl.text(gameData.name);
     //Adding attributes
     gameCardAnchorEl.attr('id', index+"");
     gameCardEl.attr("class", "game_list_card");
     gameImgEl.attr('src', gameData.image_url);
     //Make elements unclickable
     gameCardEl.attr("class", gameCardEl.attr("class") + " unclickable");
     gameImgEl.attr("class", gameImgEl.attr("class") + " unclickable");
     gameNameEl.attr("class", gameNameEl.attr("class") + " unclickable");
     // Append elements
     gameCardEl.append([gameImgEl, gameNameEl]);
     gameCardAnchorEl.append(gameCardEl);
     gameListEl.append(gameCardAnchorEl);
}

// Event on game card click
const gameCardHandler = function (event){
    event.preventDefault();
    console.log(event.target.tagName)
    if (event.target.tagName === "A"){
        selectedGame = games[event.target.id];
        console.log(selectedGame);
    }
}

//Event on form submit
const reviewFormHandler = function (event){
    event.preventDefault();
    if (!selectedGame) {
        alert("You must select the game the review is for.")
        // TODO: Add visual effect to highlight game selection area
        return;
    }
    const reviewHeader = $("#review-header").val();
    const writereview = $("#writereview").val();
    const rating = $("#rating").val();
    let data = {
        review_header: reviewHeader,
        review_text: writereview,
        star_rating: rating,
        game_id: selectedGame.id,
        user_id: sessionData.user.id
    }
    data = JSON.stringify(data)
    fetch('/api/review/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: data
    })
    .then(_response => {
        window.location.replace('/index.html')
    })
    .catch(error => {
        console.log(error);
    });
}



gameListEl.on("click", gameCardHandler);
$("#review-form").on("submit", reviewFormHandler);
init();