var contentPanel = document.getElementById("contentPanel");
contentPanel.style.border = "1px solid #FF0000";
var diePanel = document.getElementById("diePanel");
diePanel.style.border = "1px solid #000000";
diePanel.style.borderRadius ="5px";
diePanel.style.width = "100px";
diePanel.style.height = "100px";
diePanel.style.margin = "auto";
diePanel.style.marginTop = "10px";
diePanel.style.marginBottom = "10px";
var dieCanvas = document.getElementById("myCanvas");
var ctx = dieCanvas.getContext("2d");
ctx.fillStyle = 'black';
var btn = document.getElementById("rollBtn");
btn.style.width="100px";
btn.style.margin="auto";
var btnHolder = document.getElementById("btn-holder");
btnHolder.style.textAlign="center";
var centerX = dieCanvas.width / 2;
var centerY = dieCanvas.height / 2;
var width = dieCanvas.width;
var height = dieCanvas.height;
var x = 0;

btn.onclick = function() {

    x = Math.floor((Math.random() * 6) + 1);
    var myVar = window.setInterval(spin, 100);
    function stopIt() {
        window.clearInterval(myVar);
    }

    window.setTimeout(stopIt, 2000);
    draw(x);
}

function spin(){

    var z = Math.floor((Math.random() * 6) + 1);
    draw(z);
}


function draw(x){
    ctx.clearRect(0, 0, dieCanvas.width, dieCanvas.height);
    if(x%x != 0){
        console.log("Hey, no decimals!");
    }else {
        switch (x) {
            case 1:
                drawOne()
                break;
            case 2:
                drawTwo()
                break;
            case 3:
                drawThree()
                break;
            case 4:
                drawFour()
                break;
            case 5:
                drawOne();
                drawFour();
                break;
            case 6:
                drawSix();
                break;
            default:
                console.log("That's too nerdy a die for me!");
        }
    }
}
//Draw functions
function drawOne() {
    ctx.beginPath();
    ctx.arc(centerX,centerY,10,0,2 * Math.PI);
    ctx.fill();
}

function drawTwo() {
    ctx.beginPath();
    ctx.arc(width/4,height/4 + centerY,10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width/4 + centerX,height/4,10,0,2 * Math.PI);
    ctx.fill();
}

function drawThree() {
    ctx.beginPath();
    ctx.arc(width/6,height*(5/6),10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX,centerY,10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width*(5/6),height/6,10,0,2 * Math.PI);
    ctx.fill();

}

function drawFour() {
    ctx.beginPath();
    ctx.arc(width/4,height/4 + centerY,10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width/4 + centerX,height/4 + centerY,10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width/4 + centerX,height/4,10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width/4,height/4,10,0,2 * Math.PI);
    ctx.fill();
}

function drawSix() {
    ctx.beginPath();
    ctx.arc(width/4,height/6,10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width/4,centerY,10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width/4,height*(5/6),10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width/4 +centerX,height/6,10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width/4 +centerX,height/2,10,0,2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width/4 +centerX,height*(5/6),10,0,2 * Math.PI);
    ctx.fill();
}
