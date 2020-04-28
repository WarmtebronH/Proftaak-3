var cartItems = [];
var isTotalHidden = true;

var mandarijn = {
    name: "mandarijn",
    price: 1.80
}

var ananas = {
    name: "ananas",
    price: 2
}

var mango = {
    name: "mango",
    price: 0.80
}

var druiven = {
    name: "druiven",
    price: 1.20
}

var bananen = {
    name: "bananen",
    price: 0.95
}

var aardbeien = {
    name: "aardbeien",
    price: 2.25
}


function addToCart(item){
cartItems.push(item);
document.getElementById("itemCounter").innerHTML = cartItems.length;
document.getElementById("itemCounterWhite").innerHTML = cartItems.length;
showTotal();
}

function clickCart(){
    isTotalHidden = !isTotalHidden;
    showTotal();
}

function showTotal(){
var orderTotal = document.getElementById("orderTotal");
orderTotal.innerHTML = "";

if (isTotalHidden === false){
var total = 0;
for (var i = 0; i < cartItems.length; i++){
    total += cartItems[i].price;
}
orderTotal.innerHTML += "Totaal: €" + total;
}
}