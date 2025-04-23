const functionCounter ={};
function shoppingCartActive() {
    let shoppingCartImg = document.getElementById("shoppingCartSectionImg");
    if (shoppingCartImg.src.endsWith("img/add-to-cart-3046.png")) {
        shoppingCartImg.src = "img/add-to-cart-3046--green.png";
    } else {
        shoppingCartImg.src = "img/add-to-cart-3046.png";
    }
    let shoppingCartDialog = document.getElementById("shoppingCartDialog");
    if (shoppingCartDialog.classList.contains("active")) {
        shoppingCartDialog.classList.remove("active");
    } else {
        shoppingCartDialog.classList.add("active");
    }

}

function addToShoppingCart(index) {
    const key = index;
    if (functionCounter[key]===undefined) {
        functionCounter[key] = 1;
        let shoppingCartTable = document.getElementById("shoppingCartTable");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td1.classList.add("padding-left");
        td3.classList.add("padding-left");
        td4.classList.add("padding-left");
        td1.textContent = getTitle();
        td3.textContent = getPrice() ;
        td4.innerHTML = getQuantity();
        tr.appendChild(td1);
        tr.appendChild(td3);
        tr.appendChild(td4);
        shoppingCartTable.appendChild(tr);
    } else {
        alert("This book is already in your shopping cart!");
    }
    let quantityClass = document.querySelector("#quantity"+index);
    quantityClass.addEventListener("input", function() {
        let amount = parseInt(this.value);
        if (amount > 10) {
            this.value = 10;
        }
        if (amount < 1) {
            this.value = 1;
        }
       ;
    });
    getTotal();
    quantityClass.addEventListener("change", () => {
        getTotal();
    });
}


function getTotal() {
    let total = document.getElementById("shoppingCartDialogTotalPriceValue");
    let totalCost = 0;
    let tableRows = document.querySelectorAll("#shoppingCartTable tr");    
    for (let i = 0; i < tableRows.length; i++) {
        let row = tableRows[i];
        let quantity = parseInt(row.querySelector(".quantity").value);
        let price = parseFloat(row.querySelector("td:nth-child(2)").textContent);
        totalCost += quantity * price;
        total.textContent = totalCost.toFixed(2) + " €";
    }
    
}
