let greenScore = 0;
let blueScore = 0;
let greenScored = false;
let blueScored = false;
let xOne = 30;
let yOne = 20;
let yTwo = 200;
let xTwo = 350;
let gameState = "menu"; //this will decide if it goes to main menu or start game
let startTime;
let elapsedTime = 0;

function setup() {
    createCanvas(400,400);
    background("lightblue");
    console.log("Welcome to the Maze Game");
    console.log("Made by 7Zeb (Rutwik)");
    console.log("https://7zeb.github.io");
}

function draw() {
    // console.log("Current game state:", gameState); 

    if (gameState === "menu") {
        background("orange");
        mainMenu();
    } else if (gameState === "gameplay") {
        background("lightblue");
        goalArea();
        wallOne();
        wallTwo();
        wallThree();
        wallFour();
        bumpWall();
        scoreBoard();
        spriteOne();
        spriteTwo();
        if (!startTime) {
            startTime = millis(); // Capture the start time
        }
        elapsedTime = millis() - startTime; // Update elapsed time

        fill("black");
        textSize(15);
        text("Time: " + floor(elapsedTime / 1000) + "s", 20, 20);
    } else if (gameState === "tutorial") {
        background(172, 62, 250) //purple color
        tutorial();
        
    }
}


function spriteOne() {
    fill("green");
    rect(xOne,yOne,30,50,50);
}

function spriteTwo() {
    fill("blue");
    circle(xTwo,yTwo,50);
}

function goalArea() {
    fill("yellow");
    rect(150,150,80,80);
    fill("black");
    textSize(25);
    text("Goal",165,215);
}

function wallOne() {
    fill(197, 237, 222);
    stroke(197, 237, 222);
    rect(100,80,90,20);
    rect(100,80,20,90);
    stroke(0);
}

function wallTwo() {
    fill(199, 197, 237);
    stroke(199, 197, 237);
    rect(235,145,180,20);
    rect(235,145,20,160);
    stroke(0);
}

function wallThree() {
    fill(234, 237, 197);
    stroke(234, 237, 197);
    rect(315,234,170,20);
    rect(380,235,20,75);
    stroke(0);
}

function wallFour() {
    fill(207, 223, 255);
    stroke(207, 223, 255);
    rect(30,293,108,20);
    rect(30,293,20,-100);
    stroke(0);
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        xOne = xOne - 5;
    }
    if (keyCode == RIGHT_ARROW) {
        xOne = xOne + 5;
    }
    if (keyCode == UP_ARROW) {
        yOne = yOne - 5;
    }
    if (keyCode == DOWN_ARROW) {
        yOne = yOne + 5;
    }
    if (key == 'w') {
        yTwo = yTwo - 5;
    }
    if (key == 's') {
        yTwo = yTwo + 5;
    }
    if (key == 'a') {
        xTwo = xTwo - 5;
    }
    if (key == 'd') {
        xTwo = xTwo + 5;
    }
    
    //this if statement is ONLY for Main Menu
    if (gameState === "menu" && keyCode === ENTER) {
        gameState = "gameplay";
        redraw(); 
        console.log("Game state switched to:", gameState);
    }
    
    //to get to tutorial
    if (key == 't') {
        gameState = "tutorial";
        redraw();
        console.log("Welcome to the tutorial!");
    }
    
    //go back to main menu
          if (gameState === "tutorial" && key == 'm') {
          gameState = "menu";
          redraw();
        }
        
    if (gameState === "gameplay" && key == 'r') {
        resetGame();
    }    

}

function bumpWall() {
 
   if (xOne > 78 && xOne < 92 && yOne > 63 && yOne < 142) { 
    xOne = 30;
    yOne = 20;
}
    
    if (xOne >= 110 && xOne < 175 && yOne >= 35 && yOne < 60) {
        xOne = 30;
        yOne = 20;
        spriteOne();
    }
    if (xTwo >= 105 && xTwo <= 115 && yTwo >= 90 && yTwo <= 155) {
        xTwo = 200;
        yTwo = 350;
        spriteTwo();
    }
    if (xTwo >= 120 && xTwo <= 175 && yTwo >= 90 && yTwo <= 95) {
        xTwo = 200;
        yTwo = 350;
        spriteTwo();
    }
    if (xOne >= 25 && yOne >= 160 && xOne <= 30 && yOne <= 295) {
        xOne = 30;
        yOne = 20;
        spriteOne();
    }
    if (xOne >= 35 && yOne >= 280 && xOne <= 125 && yOne <= 285) {
        xOne = 30;
        yOne = 20;
        spriteOne();
    }
    if (xTwo >= 40 && yTwo >= 210 && xTwo <= 45 && yTwo <= 295) {
        xTwo = 350;
        yTwo = 200;
        spriteTwo();
    }
    if (xTwo >= 45 && yTwo >= 305 && xTwo <= 125 && yTwo <= 310) {
        xTwo = 350;
        yTwo = 200;
        spriteTwo();
    }
    if (xOne >= 235 && yOne >= 125 && xOne <= 240 && yOne <= 260) {
        xOne = 30;
        yOne = 20;
        spriteOne();
    }
    if (xOne >= 245 && yOne >= 115 && xOne <= 400 && yOne <= 120) {
        xOne = 30;
        yOne = 20;
        spriteOne();
    }
    if (xTwo >= 255 && yTwo >= 160 && xTwo <= 260 && yTwo <= 285) {
        xTwo = 350;
        yTwo = 200;
        spriteTwo();
    }
    if (xTwo >= 260 && yTwo >= 160 && xTwo <= 400 && yTwo <= 165) {
        xTwo = 350;
        yTwo = 200;
        spriteTwo();
    }

    if (xOne >= 150 && yOne >= 145 && xOne <= 200 && yOne <= 180) {
        fill("green");
        stroke("black");
        text("You Win", 60, 80);
        if (!greenScored) {
            greenScore++;
            greenScored = true;
            
        // Reset player position
        xOne = 30;
        yOne = 20;
        spriteOne();

        }
    } else {
        greenScored = false;
    }

    if (xTwo >= 175 && yTwo >= 175 && xTwo <= 210 && yTwo <= 210) {
        fill("blue");
        stroke("black");
        text("You Win", 60, 80);
        if (!blueScored) {
            blueScore++;
            blueScored = true;
            
            xTwo = 350;
            yTwo = 200;
            spriteTwo();
        }
    } else {
        blueScored = false;
    }
}

function scoreBoard() {
    //UI elements for the scoreboard
    fill(235, 128, 52);
    rect(255,20,140,80);
    fill("black");
    text("Scoreboard",260,45);
    
    //for the green text
    fill("green");
    text(greenScore,285, 80);
    
    //for the blue text
    fill("blue");
    text(blueScore,355,80);
}

function mainMenu() {
    fill("black");
    textSize(30);
    text("Maze Game v2", 105, 100);
    
    fill("darkblue");
    textSize(20);
    text("Press ENTER to start", 110,250);
    
    fill("yellow");
    text("Press T to go to tutorial", 105,280);
    
    fill("green");
    textSize(15);
     text("Game available on website", 120, 300);
    text("7zeb.github.io",160,320)
}

function tutorial() {
    fill("black");
    textSize(20);
    text("HOW TO PLAY", 125, 40);
    
    textSize(15);
    text("Use Arrow keys to move the green character",50,60);
    text("Use WASD keys to move the blue character",50,80);
    text("Try not to bump into walls, as you will be reset",45,100);
    text("Press R to restart the game", 105,140);
    text("Press M to go back to main menu",80,160)
    
    textSize(12);
    text("The goal is in the middle, once you get there the scoreboard will update",10,120);
}

function resetGame() {
    // Reset positions
    xOne = 30;
    yOne = 20;
    xTwo = 350;
    yTwo = 200;

    // Reset scores
    greenScore = 0;
    blueScore = 0;
    greenScored = false;
    blueScored = false;

    // Reset game state
    gameState = "menu"; 
    
    // Reset time
    startTime = null;

    console.log("Game reset!");
}

