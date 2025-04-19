let title = document.getElementById("title");
let author = document.getElementById("storeCardAuthor");
let rating = document.getElementById("storeCardRatingNumber");
let price = document.getElementById("storeCardPrice");
let genre = document.getElementById("storeCardGenre");
let publishedYear = document.getElementById("storeCardErscheinungsjahr");


let index = 0;

function renderBook() {
    title.textContent = getTitle();
    author.textContent = getAuthor();
    rating.textContent = getLikes() ;
    price.textContent = getPrice();
    genre.textContent = getGenre();
    publishedYear.textContent = getPublishedYear();
}

function nextBook() {
    index = (index + 1) % books.length;
    renderBook();
}
function prevBook() {
    index = (index - 1 + books.length) % books.length;
    renderBook();
}