const gameListEl = $("#game_list");
// Get our games and render them
let games = [];

function init(){
    fetch('/api/game/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        games = data;
        generateGameCards();
    })
}

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
     // Append elements
     gameCardEl.append([gameImgEl, gameNameEl]);
     gameCardAnchorEl.append(gameCardEl);
     gameListEl.append(gameCardAnchorEl);
}

init();



const reviewFormHandler = function (event){
    event.preventDefault();
    
    const writereview = $("#writereview").val();
    const rating = $("#rating").val();
}

$("#review_form").on("submit", reviewFormHandler);