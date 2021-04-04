var canvas, gameState=0, Contestants=0, database;
var question, contestant, quiz;
var contestantCount;
//var nameVal , OptionVal;
function setup() {
    canvas = createCanvas(displayWidth-25, displayHeight - 125);
    database=firebase.database();
    quiz = new Quiz();
    quiz.getState();
    quiz.start();
}
function draw() {
    background("chartreuse");
    if (contestantCount === 4) {
        quiz.update(1);
    }
    if (gameState === 1) {
        quiz.play();
        //text(nameVal + ": " + OptionVal, 250, 240);
    }
    //text(nameVal + ": " + OptionVal, 250, 240);
    drawSprites();
    
}
