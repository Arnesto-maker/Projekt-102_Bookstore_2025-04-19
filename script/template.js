function getTitle() {
    return `${books[index].name}`;
}
 function getLikes() {
    return `${books[index].likes}`;
 }
 function getPrice() {
    return`${books[index].price} €`;
 }
function getAuthor() {
    return `: ${books[index].author}`;
}

function getPublishedYear() {
    return `: ${books[index].publishedYear}`;
}
function getGenre() {
    return `: ${books[index].genre}`;
}
function getLiked() {
    return `${books[index].liked}`;
}
function getSequence() {
    return `${index + 1} / ${books.length}`;
}
function getDialogTitle() {
    return `${books[index].name}`;
}
   
function getLeaveAComment() {
    return `<button id="storeCardReviewButton" onclick="openDialog(${index})">Leave a comment</button>`;
}
function getDescription(index) {
    return `${description[index]}`;
}