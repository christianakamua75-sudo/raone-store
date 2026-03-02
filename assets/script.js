
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

let cart=[];
let total=0;

function addToCart(item,price){
cart.push({item,price});
total+=price;
document.getElementById("cartItems").innerHTML =
cart.map(p=>"<div>"+p.item+" - $"+p.price+"</div>").join("");
document.getElementById("total").innerText="Total: $"+total;
}

function scrollProducts(){
document.getElementById("products").scrollIntoView({behavior:"smooth"});
}
