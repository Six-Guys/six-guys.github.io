
// Pricing page

var x = 0;
var g1 = 0;
var g2 = 0;
var g3 = 0;
var g4 = 0;
function addToCart1(){
    x += 800;
    g1 += 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g1').innerHTML = g1;
}
function addToCart2(){
    x += 1200;
    g2 += 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g2').innerHTML = g2;
}
function addToCart3(){
    x += 1800;
    g3 += 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g3').innerHTML = g3;
}
function addToCart4(){
    x += 2400;
    g4 += 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g4').innerHTML = g4;
}
function removeFromCart1(){
    if (x == 0){
    }
    else {
    x -= 800;
    g1 -= 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g1').innerHTML = g1;
    }
}
function removeFromCart2(){
    if (x == 0){
    }
    else {
    x -= 1200;
    g2 -= 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g2').innerHTML = g2;
    }
}
function removeFromCart3(){
    if (x == 0){
    }
    else {
    x -= 1800;
    g3 -= 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g3').innerHTML = g3;
    }
}
function removeFromCart4(){
    if (x == 0){
    }
    else {
    x -= 2400;
    g4 -= 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g4').innerHTML = g4;
    }
}


// Checkout page

const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBbt")
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const submitBtn = document.querySelector("submit");

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginleft = "-25%";
});

prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginleft = "25%";
});

nextBtnSec.addEventListener("click",function(){
    slidePage.style.marginleft = "-25%";
});

prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginleft = "25%";
});