
var x = 0;
function addToCart1(){
    x += 800;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
}
function addToCart2(){
    x += 1200;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
}
function addToCart3(){
    x += 1800;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
}
function addToCart4(){
    x += 2400;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
}
function removeFromCart1(){
    if (x == 0){
    }
    else {
    x -= 800;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    }
}
function removeFromCart2(){
    x -= 1200;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
}
function removeFromCart3(){
    x -= 1800;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
}
function removeFromCart4(){
    x -= 2400;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
}