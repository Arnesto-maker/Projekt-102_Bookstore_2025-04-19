function openDialog(index) {
    let dialog = document.querySelector(".dialogSection");
    dialog.setAttribute("style", "display: flex;");
    renderDialog(index);
}
function closeDialog() {
    let dialog = document.querySelector(".dialogSection");
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


function renderDialog(index) {
    let dialogTitle = document.getElementById("dialogTitle");
    let description = document.getElementById("aboutThebook");
    let commentTable = document.getElementById("commentTable");
    let resumeSender = document.getElementById("commentSender");
    let resumeInside = document.getElementById("commentInside");
    let inputComment = document.getElementById("inputComment");
    dialogTitle.textContent = getTitle();
    description.textContent = getDescription(index);
    commentTable.innerHTML = "";
    inputComment.value = "";    
    for (let i = 0; i < books[index].comments.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.classList.add("padding-top");
        td2.classList.add("padding-top");
        td2.classList.add("padding-left");
        td1.textContent = String("@"+""+ books[index].comments[i].name+":");
        td2.textContent = books[index].comments[i].comment;
        tr.appendChild(td1);
        tr.appendChild(td2);
        commentTable.appendChild(tr);

    }
  
}

function sendComment() {
    let inputComment = document.getElementById("inputComment");
    let commentTable = document.getElementById("commentTable");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.classList.add("padding-top");
    td2.classList.add("padding-top");
    td2.classList.add("padding-left");
    td1.textContent = "@Arnesto:";
    td2.textContent = inputComment.value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    const firstChild = commentTable.firstElementChild;
    commentTable.insertBefore(tr, firstChild);
    inputComment.value = "";
    
}



