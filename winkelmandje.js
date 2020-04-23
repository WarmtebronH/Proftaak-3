var cartItems = [];
var isTotalHidden = true;

var ananas = {
    name: "Ananas",
    price: 2
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