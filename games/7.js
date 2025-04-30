var randNum = 0;

function setup () {
    createCanvas(400,400);
    background(245, 161, 66);
    computer();
    monitor();
    
}

function computer() {
    //drawing the desktop computer
    //PC Case
    fill(224, 209, 148); //color for computer and monitor
    rect(6,180,130,200); //PC Case
    //computer company name 
    textSize(20); //change text size
    fill(81, 150, 41); //change color for text to Gatway's iconic green color
    text('Gateway',30,200); //throwback to the early 2000s
    //power button
    fill(191, 59, 59); //red power button goes brrrrr
    circle(70,220,20); //the outside power button
    fill(217, 33, 33); //lighter red for inner part of the button
    circle(70,220,10); //and the power button is done.
    //CD-RW drive
    fill(224,209,148); //it's got to blend
    rect(8,234,125,20); //the CD-RW Drive
    textSize(10); //makes the text smaller.
    fill(0); //makes the text color black
    text('CD-RW Drive',10,247); //the text for the CD Drive
    //eject button for CD-RW Drive (yes, i put a bunch of detail in this)
    fill(186, 174, 125); //color for the eject button, and yes
    rect(110,237,20,15); //eject button
    //Floppy Disk Drive (I'm just doing it cuz im bored)
    fill(224,209,148); //floppy disk drive has to blend
    rect(8,257,75,20); //floppy drive
    //vents for the computer
    stroke(0); //set stroke color to black for the vents
    line(11,337,11,367);
    line(15,337,15,367);
    line(19,337,19,367);
    line(23,337,23,367);
    line(27,337,27,367);
    line(31,337,31,367);
    line(35,337,35,367);
    line(39,337,39,367);
    line(43,337,43,367);
    line(47,337,47,367);
    line(51,337,51,367);
    line(55,337,55,367);
    line(59,337,59,367);
    line(63,337,63,367);
    line(67,337,67,367);
    line(71,337,71,367);
    line(75,337,75,367);
    line(79,337,79,367);
    line(83,337,83,367);
    line(87,337,87,367);
    line(91,337,91,367);
    line(95,337,95,367);
    line(99,337,99,367);
    line(103,337,103,367);
    line(107,337,107,367);
    line(111,337,111,367);
    line(115,337,115,367);
    line(119,337,119,367);
    line(123,337,123,367);
    line(127,337,127,367);
    line(131,337,131,367);
    //ports
    fill(0); //change fill color to black for the ports
    rect(9,282,15,15); //ethernet port (i dont know why it would it be on the front)
    rect(11.5,292,10,10); //ethernet port
    rect(30,282,15,5); //USB Port #1
    rect(30,292,15,5); //USB Port #1
    
}

function monitor() {
    stroke(224, 209, 148); //color of the monitor
    strokeWeight(10); //helps us make the trick
    fill(0); //yeah the screen is black.
    rect(147,149,245,160); //the actual monitor
    strokeWeight(1); //resets stroke weight to 1
    noStroke(); //resets stroke color to black
    fill(224,209,148); //color for the monitor stand
    rect(225,311,80,100);
    stroke(0);
    
}

function draw() {
    var randX = floor(random(170,375))
    var red = random(0,256);
    var green = random(0,256);
    var blue = random(0,256);
    var randY = floor(random(175,288))
    var randWidth = floor(random(10,30))
    var randHeight = floor(random(10,30))
    fill(red,green,blue);
    ellipse(randX,randY,randWidth,randHeight);
    
    print(mouseX,",",mouseY); //debug tools
}
