var c = document.getElementById("dieCanvas"),
    width = c.width,
    height = c.height,
    centerX = width / 2,
    centerY = height / 2,
    ctx = c.getContext("2d"),
    x = 0;

function drawPip(x, y) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
}

function drawOnePip() {
    drawPip(centerX, centerY);
}

function drawTwoPips() {
    drawPip(width / 4, height / 4 + centerY);
    drawPip(width / 4 + centerX, height / 4);
}

function drawThreePips() {
    drawPip(width / 6, height * (5 / 6));
    drawPip(centerX, centerY);
    drawPip(width * (5 / 6), height / 6);
}

function drawFourPips() {
    drawPip(width / 4, height / 4 + centerY);
    drawPip(width / 4 + centerX, height / 4 + centerY);
    drawPip(width / 4 + centerX, height / 4);
    drawPip(width / 4, height / 4);
}

function drawFivePips() {
    drawOnePip();
    drawFourPips();
}

function drawSixPips() {
    drawPip(width / 4, height / 6);
    drawPip(width / 4, centerY);
    drawPip(width / 4, height * (5 / 6));
    drawPip(centerX + width / 4, height / 6);
    drawPip(centerX + width / 4, height / 2);
    drawPip(centerX + width / 4, height * (5 / 6));
}

function drawPips(x) {
    ctx.clearRect(0, 0, width, height);
    if (x % x !== 0) {
        console.log("Hey, no decimals!");
    } else {
        switch (x) {
            case 1:
                drawOnePip();
                break;
            case 2:
                drawTwoPips();
                break;
            case 3:
                drawThreePips();
                break;
            case 4:
                drawFourPips();
                break;
            case 5:
                drawFivePips();
                break;
            case 6:
                drawSixPips();
                break;
            default:
                console.log("That's too nerdy a die for me!");
        }
    }
}

function rollSixSidedDie() {
    function spin() {
        var z = Math.floor((Math.random() * 6) + 1);
        drawPips(z);
    }

    random = Math.floor((Math.random() * 6) + 1);
    var myVar = window.setInterval(spin, 100);

    function stopIt() {
        window.clearInterval(myVar);
    }
    window.setTimeout(stopIt, 2000);
    drawPips(random);
}