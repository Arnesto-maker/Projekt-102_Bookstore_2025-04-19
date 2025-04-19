function likebuttonClick() {
    const likeButton = document.getElementById("storeCardRatingImg");
    const likeButtonNumber = document.getElementById("storeCardRatingNumber");
    if (likeButton.src.endsWith("img/heart-3510.png")) {
        likeButton.src = "img/red-heart-11121.png";
        likeButtonNumber.textContent = parseInt(likeButtonNumber.textContent) + 1;
    } else {
        likeButton.src = "img/heart-3510.png";
        likeButtonNumber.textContent = parseInt(likeButtonNumber.textContent) - 1;
    }
    

}