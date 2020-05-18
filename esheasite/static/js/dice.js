'use strict';
var contentPanel = document.getElementById("contentPanel"),
    diePanel = document.getElementById("diePanel"),
    dieCanvas = document.getElementById("dieCanvas"),
    ctx = dieCanvas.getContext("2d"),
    btnHolder = document.getElementById("btnHolder"),
    rollBtn = document.getElementById("rollBtn");

contentPanel.style.border = "1px solid #FF0000"; /*red*/
contentPanel.style.width = "200px";
contentPanel.style.height = "200px";
contentPanel.style.alignContent = "space-around";
contentPanel.style.justifyContent = "space-around";

diePanel.style.backgroundColor = "#FFFFFF"; /*white*/
diePanel.style.border = "1px solid #000000"; /*black*/
diePanel.style.borderRadius = "5px";
diePanel.style.width = "100px";
diePanel.style.height = "100px";
diePanel.style.marginTop = "20px";
diePanel.style.marginBottom = "auto";
diePanel.style.marginLeft = "auto";
diePanel.style.marginRight = "auto";
diePanel.style.padding = "none";

//dieCanvas.style.border = "1px solid #0000FF"; /*blue*/
dieCanvas.style.borderRadius = "inherit";
dieCanvas.style.height = "inherit";
dieCanvas.style.height = "inherit";
dieCanvas.width = "inherit";
dieCanvas.height = "inherit";
dieCanvas.style.marginTop = "auto";
dieCanvas.style.marginBottom = "auto";
dieCanvas.style.marginLeft = "auto";
dieCanvas.style.marginRight = "auto";
dieCanvas.style.padding = "none";

ctx.fillStyle = 'black';

btnHolder.style.border = "1px solid #00FF00"; /*green*/
btnHolder.style.justifyContent = "center";
btnHolder.style.alignItems = "center";

rollBtn.style.borderRadius = "5px";
rollBtn.style.marginLeft = "auto";
rollBtn.style.marginRight = "auto";
rollBtn.style.marginTop = "auto";
rollBtn.style.marginBottom = "auto";

var centerX = dieCanvas.width / 2,
    centerY = dieCanvas.height / 2,
    width = dieCanvas.width,
    height = dieCanvas.height,
    x = 0;

//Draw functions
function drawPip(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
}

function drawOne() {
    drawPip(centerX, centerY);
}

function drawTwo() {
    drawPip(width / 4, height / 4 + centerY);
    drawPip(width / 4 + centerX, height / 4);
}

function drawThree() {
    drawPip(width / 6, height * (5 / 6));
    drawPip(centerX, centerY);
    drawPip(width * (5 / 6), height / 6);
}

function drawFour() {
    drawPip(width / 4, height / 4 + centerY);
    drawPip(width / 4 + centerX, height / 4 + centerY);
    drawPip(width / 4 + centerX, height / 4);
    drawPip(width / 4, height / 4);
}

function drawFive() {
    drawOne();
    drawFour();
}

function drawSix() {
    drawPip(width / 4, height / 6);
    drawPip(width / 4, centerY);
    drawPip(width / 4, height * (5 / 6));
    drawPip(centerX + width / 4, height / 6);
    drawPip(centerX + width / 4, height / 2);
    drawPip(centerX + width / 4, height * (5 / 6));
}

function draw(x) {
    ctx.clearRect(0, 0, dieCanvas.width, dieCanvas.height);
    if (x % x !== 0) {
        console.log("Hey, no decimals!");
    } else {
        switch (x) {
            case 1:
                drawOne();
                break;
            case 2:
                drawTwo();
                break;
            case 3:
                drawThree();
                break;
            case 4:
                drawFour();
                break;
            case 5:
                drawFive();
                break;
            case 6:
                drawSix();
                break;
            default:
                console.log("That's too nerdy a die for me!");
        }
    }
}

rollBtn.onclick = function () {
    function spin() {
        var z = Math.floor((Math.random() * 6) + 1);
        draw(z);
    }

    x = Math.floor((Math.random() * 6) + 1);
    var myVar = window.setInterval(spin, 100);

    function stopIt() {
        window.clearInterval(myVar);
    }
    window.setTimeout(stopIt, 2000);
    draw(x);
};
