var randFill = 0;
var randStroke = 0;
var fillColors = ["red","green","blue","yellow","orange","black"];
var strokeColors = ["red","black","yellow","white","lightblue","lime"];
var diceList = [dice1, dice2, dice3, dice4, dice5, dice6];

var circlePressed = false;
var squarePressed = false;
var trianglePressed = false;
var dicePressed = false;

function setup() {
    createCanvas(400,400);
    background(53, 196, 115);
    console.log("3.13 Random Shapes with a button");
    console.log("Created by Rutwik Wadekar");
    
    // Calling OUR functions
    baseText();
    baseSquare(); // This is for the base of our program
    button(9,330,"Circle","blue");
    button(95,330,"Square","blue");
    button(180,330,"Triangle","blue");
    button(267,330,"Dice","blue");
}

function draw() {
    // Nothing to draw continuously in this example
}

function baseText() {
    fill(255);
    textSize(25);
    textFont('Courier New');
    text('Click on the buttons to generate shapes',50,30,360);
}

function baseSquare() {
    fill(237, 138, 24); // Nice reddish-orangish color
    rect(5,90,390,300);
}

function button(posX, posY, fillerText, color) {
    fill(color);
    rect(posX, posY, 80, 50);
    textFont('Regular');
    textSize(15);
    fill(255);
    text(fillerText, posX + 20, posY + 30);
}

function resetCanvas() {
    baseText();
    baseSquare(); // This is for the base of our program
    button(9,330,"Circle", circlePressed ? "lightgreen" : "blue");
    button(95,330,"Square", squarePressed ? "lightgreen" : "blue");
    button(180,330,"Triangle", trianglePressed ? "lightgreen" : "blue");
    button(267,330,"Dice", dicePressed ? "lightgreen" : "blue");
}

function myCircle(fillColor, strokeColor) {
    resetCanvas();
    strokeWeight(5);
    stroke(strokeColor);
    fill(fillColor);
    circle(200,200,200);
    strokeWeight(1); // Sets the strokeWeight back to 1
    stroke(0); // Sets the stroke back to black
}

function mySquare(fillColor, strokeColor) {
    resetCanvas();
    strokeWeight(5);
    stroke(strokeColor);
    fill(fillColor);
    rect(150, 200, 100, 100);
    strokeWeight(1); // Sets the strokeWeight back to 1
    stroke(0); // Sets the stroke back to black
}

function myTriangle(fillColor, strokeColor) {
    resetCanvas();
    strokeWeight(5);
    stroke(strokeColor);
    fill(fillColor);
    triangle(88, 304, 171, 121, 277, 304);
    strokeWeight(1); // Sets the strokeWeight back to 1
    stroke(0); // Sets the stroke back to black
}

function dice1() {
    fill(65, 165, 232);
    rect(150, 150, 100, 100);
    fill(255);
    circle(200, 200, 25); // One dot in the center
    strokeWeight(1);
}

function dice2() {
    fill(65, 165, 232);
    rect(150, 150, 100, 100);
    fill(255);
    circle(170, 170, 25); // Top left
    circle(230, 230, 25); // Bottom right
    strokeWeight(1);
}

function dice3() {
    fill(65, 165, 232);
    rect(150, 150, 100, 100);
    fill(255);
    circle(170, 170, 25); // Top left
    circle(200, 200, 25); // Center
    circle(230, 230, 25); // Bottom right
    strokeWeight(1);
}

function dice4() {
    fill(65, 165, 232);
    rect(150, 150, 100, 100);
    fill(255);
    circle(170, 170, 25); // Top left
    circle(230, 170, 25); // Top right
    circle(170, 230, 25); // Bottom left
    circle(230, 230, 25); // Bottom right
    strokeWeight(1);
}

function dice5() {
    fill(65, 165, 232);
    rect(150, 150, 100, 100);
    fill(255);
    circle(170, 170, 25); // Top left
    circle(230, 170, 25); // Top right
    circle(200, 200, 25); // Center
    circle(170, 230, 25); // Bottom left
    circle(230, 230, 25); // Bottom right
    strokeWeight(1);
}

function dice6() {
    fill(65, 165, 232);
    rect(150, 150, 100, 100);
    fill(255);
    circle(170, 160, 25); // Top left
    circle(230, 160, 25); // Top right
    circle(170, 200, 25); // Center left
    circle(230, 200, 25); // Center right
    circle(170, 240, 25); // Bottom left
    circle(230, 240, 25); // Bottom right
    strokeWeight(1);
}

function myDice(fillColor, strokeColor) {
    resetCanvas();
    strokeWeight(5);
    stroke(strokeColor);
    fill(fillColor);
    let randomIndex = floor(random(0, 6)); // Get a random number between 0 and 5
    diceList[randomIndex](); // Call a random dice function
    strokeWeight(1); // Sets the strokeWeight back to 1
    stroke(0); // Sets the stroke back to black
}

function mousePressed() {
    // Declaring variables
    randFill = Math.floor(random(0, 6));  // Corrected range
    randStroke = Math.floor(random(0, 6));  // Corrected range
    
    // Reset all button states
    circlePressed = false;
    squarePressed = false;
    trianglePressed = false;
    dicePressed = false;
    
    // Check which button is pressed and update its state
    if (mouseX > 9 && mouseY > 330 && mouseX < 88 && mouseY < 377) {
        circlePressed = true;
        button(9, 330, "Circle", "lightgreen");
        myCircle(fillColors[randFill], strokeColors[randStroke]);
    } else {
        button(9, 330, "Circle", "blue");
    }
    if (mouseX > 95 && mouseY > 330 && mouseX < 176 && mouseY < 378) {
        squarePressed = true;
        button(95, 330, "Square", "lightgreen");
        mySquare(fillColors[randFill], strokeColors[randStroke]);
    } else {
        button(95, 330, "Square", "blue");
    }
    if (mouseX > 180 && mouseY > 330 && mouseX < 260 && mouseY < 378) {
        trianglePressed = true;
        button(180, 330, "Triangle", "lightgreen");
        myTriangle(fillColors[randFill], strokeColors[randStroke]);
    } else {
        button(180, 330, "Triangle", "blue");
    }
    if (mouseX > 267 && mouseY > 330 && mouseX < 346 && mouseY < 378) {
        dicePressed = true;
        button(267, 330, "Dice", "lightgreen");
        myDice(fillColors[randFill], strokeColors[randStroke]);
    } else {
        button(267, 330, "Dice", "blue");
    }
}