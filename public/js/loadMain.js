fetch("/api/review")
.then(response => response.json())
.then(data => {
    console.log(data)
    var container = document.getElementById("reviewContainer");

    data.forEach(review => {
        var newP = document.createElement("p");
        newP.textContent = review.review_header;
        container.appendChild(newP)
    })
})