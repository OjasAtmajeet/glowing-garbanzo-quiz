class Question {

    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Submit');
        this.input2 = createInput("answerLetter");
        this.question = createElement('h3');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
    }
    hide() {

        this.button.hide();
        this.input.hide();
        this.input2.hide();
    }

    display() {
        var title = createElement('h2')
        title.html("The Quiz Game");
        title.position((displayWidth / 2) - 70, 0);

        this.input.position(displayWidth / 2 - 70, displayHeight / 2 - 200);
        this.input2.position(displayWidth / 2 - 70, displayHeight / 2 - 180);
        this.button.position(displayWidth / 2 - 20, displayHeight / 2 - 150);
        
        this.question.html("Which is the country with the Highest Population?");
        this.question.position((displayWidth / 2) - 200, 75)
        this.option1.html("A) India" );
        this.option1.position((displayWidth / 2)-50, 100);
        this.option2.html("B) Russia");
        this.option2.position((displayWidth / 2) - 50, 125);
        this.option3.html("C) China");
        this.option3.position((displayWidth / 2) - 50, 150);
        this.option4.html("D) U.S.A.");
        this.option4.position((displayWidth / 2) - 50, 175);
       
       
        this.button.mousePressed(() => {
            this.input.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contestant.answer = this.input2.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);

        });

    }
}
