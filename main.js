// Front page

function warning(){
    alert("You are about to head to the purchase page");
}


// Pricing page

var x = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var g1 = 0;
var g2 = 0;
var g3 = 0;
var g4 = 0;

function addToCart1(){
    x += 800;
    x1 += 800;
    g1 += 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g1').innerHTML = g1;
}
function addToCart2(){
    x += 1200;
    x2 += 1200;
    g2 += 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g2').innerHTML = g2;
}
function addToCart3(){
    x += 1800;
    x3 += 1800;
    g3 += 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g3').innerHTML = g3;
}
function addToCart4(){
    x += 2400;
    x4 += 2400;
    g4 += 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g4').innerHTML = g4;
}
function removeFromCart1(){
    if (g1 == 0 ){
    }
    else {
    x -= 800;
    x1 -= 800;
    g1 -= 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g1').innerHTML = g1;
    }
}
function removeFromCart2(){
    if (g2 == 0){
    }
    else {
    x -= 1200;
    x2 -= 1200;
    g2 -= 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g2').innerHTML = g2;
    }
}
function removeFromCart3(){
    if (g3 == 0){
    }
    else {
    x -= 1800;
    x3 -= 1800;
    g3 -= 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g3').innerHTML = g3;
    }
}
function removeFromCart4(){
    if (g4 == 0){
    }
    else {
    x -= 2400;
    x4 -= 2400;
    g4 -= 1;
    document.getElementById('Price').innerHTML = "Your cart total: " + x +"$";
    document.getElementById('g4').innerHTML = g4;
    }
}

function update() {
    localStorage.setItem('p1', x1);
    localStorage.setItem('p2', x2);
    localStorage.setItem('p3', x3);
    localStorage.setItem('p4', x4);
    localStorage.setItem('c1', g1);
    localStorage.setItem('c2', g2);
    localStorage.setItem('c3', g3);
    localStorage.setItem('c4', g4);
    localStorage.setItem('c4', g4);
    
}



// Checkout page

function page1() {
    document.getElementById("profile").setAttribute("checked", true);
    document.getElementById("settings").removeAttribute("checked");
    document.getElementById("posts").removeAttribute("checked");
    document.getElementById("books").removeAttribute("checked");
}

function page2() {
    document.getElementById("profile").removeAttribute("checked");
    document.getElementById("settings").setAttribute("checked", true);
    document.getElementById("posts").removeAttribute("checked");
    document.getElementById("books").removeAttribute("checked");
}

function page3() {
    document.getElementById("profile").removeAttribute("checked");
    document.getElementById("settings").removeAttribute("checked");
    document.getElementById("posts").setAttribute("checked", true);
    document.getElementById("books").removeAttribute("checked");
}

function page4() {
    document.getElementById("profile").removeAttribute("checked");
    document.getElementById("settings").removeAttribute("checked");
    document.getElementById("posts").removeAttribute("checked");
    document.getElementById("books").setAttribute("checked", true);
};
