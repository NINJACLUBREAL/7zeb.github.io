var carX = 0;
var carY = 121;
var carXTwo = 0;
var randSpeed = 0;
var randSpeedTwo = 0;
var winner = ""; // Variable to store the winner

function setup() {
    var randSpeed = (random(0,2.8));
    var randSpeedTwo = (random(0,2.8));
    createCanvas(600,400);
    road();
    checkered();
    console.log("Rectangle Racing");
    console.log("Made by Rutwik Wadekar")
}

function road() {
    fill(255); // color for the road lines
    rect(2, 182, 50, 20);
    rect(62, 182, 50, 20);
    rect(122, 182, 50, 20);
    rect(182, 182, 50, 20);
    rect(242, 182, 50, 20);
    rect(302, 182, 50, 20);
    rect(362, 182, 50, 20);
    rect(422, 182, 50, 20);
    rect(482, 182, 50, 20);
    rect(542, 182, 50, 20);
}

function checkered() {
    fill(0); // black color for checkered pattern
    rect(558, 0, 42, 400); // part one of the checkered line
    fill(255); // white color for the checkered pattern
    rect(558, 31, 42, 40); 
    rect(558, 101, 42, 40); 
    rect(558, 171, 42, 40); 
    rect(558, 241, 42, 40); 
    rect(558, 311, 42, 40); 
    rect(558, 381, 42, 40); 
    rect(558, 451, 42, 40); 
    rect(558, 521, 42, 40); 
}

function carOne(x, y, color) {
    fill(color);
    rect(x, y, 60, 20);
    randSpeed += random(0, 1.5);
}

function carTwo(x, y, color) {
    fill(color);
    rect(x, y, 60, 20);
    randSpeedTwo += random(0, 1.5);
}

function displayWinner() {
    // Display the winner on the banner at the top of the screen
    fill(242, 140, 15);
    rect(width/3.5,10,260,40);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(winner + " Wins!", width / 2, 30);
}

function draw() {
    background(169, 175, 184); // background
    road();
    checkered();
    
    carOne(carX, carY, "blue");
    carTwo(carXTwo, 221, "green");

    // Move the cars
    carX += randSpeed;
    carXTwo += randSpeedTwo;

    // Check if any car reaches the finish line (x-position > 560)
    if (carX > 560 && winner === "") {
        winner = "Blue Car"; // Blue car wins
    }
    if (carXTwo > 560 && winner === "") {
        winner = "Green Car"; // Green car wins
    }

    // Display the winner if there's one
    if (winner !== "") {
        displayWinner();
    }
}
