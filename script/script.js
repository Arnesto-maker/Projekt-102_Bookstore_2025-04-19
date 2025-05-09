let title = document.getElementById("title");
let author = document.getElementById("storeCardAuthor");
let rating = document.getElementById("storeCardRatingNumber");
let price = document.getElementById("storeCardPrice");
let genre = document.getElementById("storeCardGenre");
let publishedYear = document.getElementById("storeCardErscheinungsjahr");
let likeButton = document.getElementById("storeCardRatingImg");
let storeCardSequence = document.getElementById("storeCardSequence");
let leaveAComment = document.getElementById("leaveAComment");



let index = 0 ;

function renderBook() {
    title.textContent = getTitle();
    author.textContent = getAuthor();
    rating.textContent = getLikes() ;
    price.textContent = getPrice();
    genre.textContent = getGenre();
    leaveAComment.innerHTML = getLeaveAComment();
    publishedYear.textContent = getPublishedYear();
    if (getLiked() === "true") {
        likeButton.src = "img/red-heart-11121.png";
    } else {
        likeButton.src = "img/heart-3510.png";
    }
    storeCardSequence.textContent = getSequence();
}

function nextBook() {
    index = (index + 1) % books.length;
    renderBook();   
}
function prevBook() {
    index = (index - 1 + books.length) % books.length;
    renderBook();
}
function nextBookActive() {
    let nextCard = document.getElementById("nextCardImg");
    nextCard.src="img/arrow-right-3098--black.png";
}
function nextBookDeactive() {
    let nextCard = document.getElementById("nextCardImg");
    nextCard.src="img/arrow-right-3098.png";
}
function prevBookActive() {
    let prevCard = document.getElementById("prevCardImg");
    prevCard.src="img/arrow-left-3099--black.png";
}
function prevBookDeactive() {
    let prevCard = document.getElementById("prevCardImg");
    prevCard.src="img/arrow-left-3099.png";
}
function init () {
    renderBook();
    for (let i = 0; i < books.length; i++) {
        renderAddedComment(i);
    }
}