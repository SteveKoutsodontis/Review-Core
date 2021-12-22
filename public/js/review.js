const gameListEl = $("#game_list");
const sessionData = JSON.parse(sessionStorage.getItem("UserSession"));
const logged = document.getElementById("logged")
// Get our games and render them
let games = [];
let selectedGame;
if(sessionData) {
    logged.innerHTML= "";
    let newA = document.createElement("a")
    newA.textContent = "Log Out"
    newA.setAttribute("href", "#")
    newA.addEventListener("click", logUserOut);

    logged.appendChild(newA)
}

async function logUserOut() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        sessionStorage.removeItem("UserSession")
        document.location.replace('/');
      } else {
        alert('Failed to log out');
      }
}
// Init function does the necessary setup
function init(){
    if (!sessionData || !sessionData.logged_in){
        if (!alert("You must be logged in to create a review. Click OK to be redirected to login page."))
            window.location.href = "/login.html"; return;
    }
    if (sessionData)
        $("#username-display").text(!sessionData.user.username ? "Not logged in" : sessionData.user.username);
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
    if (event.target.tagName === "A"){
        //Set previously selected game to its index in the array
        if ($("#selected-game").length !== 0)
            $("#selected-game").attr("id", games.indexOf(selectedGame));
        selectedGame = games[event.target.id];
        $(`#${event.target.id}`).attr("id", "selected-game");
    }
}

//Event on form submit
const reviewFormHandler = function (event){
    event.preventDefault();
    if (!selectedGame) {
        alert("You must select the game the review is for.")
        // TODO: Add visual effect to highlight game selection area
        //Use animate
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
        window.location.href = '/index.html';
    })
    .catch(error => {
        console.log(error);
    });
}



gameListEl.on("click", gameCardHandler);
$("#review-form").on("submit", reviewFormHandler);
init();