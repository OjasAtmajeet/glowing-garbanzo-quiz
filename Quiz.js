class Quiz {
    constructor() {
        
    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState: data.val()
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }
    async start() {
        if (gameState === 0) {
            contestant = new Contestant();
            var contestantCountRef = await database.ref('Contestants').once("value")
            if (contestantCountRef.exists()) {
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();

        }
    }
    play() {
        getPlayerInfo();
        if (allPlayers != undefined) {
            text("RESULTS", 200, 200);
            background("chartreuse");
            var y = 350;
            for (var plr in allPlayers) {
                y+=30;
                var correctAns = "C";
                if (correctAns === allPlayers[plr].answer) {
                    fill("green");
                }
                else {
                    fill("scarlet");
                }
                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].answer, 500, y);
            }

        }

    }
}