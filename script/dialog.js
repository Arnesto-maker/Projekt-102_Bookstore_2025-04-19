function closeDialog() {
    let dialog = document.querySelector(".dialogSection");
    let dialogHeader = document.querySelector(".dialogHeader");
    dialogHeader.setAttribute("style", "color: red;");
    dialog.setAttribute("style", "display: none;");

}
function sendCommentButtonAktiv() {
    let sendCommentImg = document.getElementById("sendCommentImg");
    sendCommentImg.src = "img/paper-plane-2563--red.png";
}
function sendCommentButtonDeaktiv() {
    let sendCommentImg = document.getElementById("sendCommentImg");
    sendCommentImg.src = "img/paper-plane-2563.png";
}