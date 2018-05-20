var side = 15;
var xy = [];

function setup() {
    frameRate(5);
    createCanvas(800, 800);
    background('#acacac');

    r = random(255);
    g = random(255);
    b = random(255);

}

function mouseDragged() {
    socket.emit("kordinatner", [mouseX, mouseY,r,g,b]);
}


var socket;
window.onload = main;


function main() {



    socket = io.connect('http://localhost:3000');


    function drawEllipse(arr) {
        fill(arr[2],arr[3],arr[4]);
        ellipse(arr[0], arr[1], 20, 20);
    }

    socket.on("kordinatner", drawEllipse)
}

