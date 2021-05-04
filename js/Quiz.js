class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
    textSize(15);
    fill("blue");
    text("RESULT",425,200);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      var display=235;
      textSize(15);
      fill("blue")
      text("Correct marked in Green, Wrong in Red",425,220);
      for(var plr in allContestants){
        var correctAns= "2";
        if(correctAns === allContestants[plr].answer){
          fill("green");
        }
        else{
          fill("red");
        }
        display += 30;
        textSize(15);
        text(allContestants[plr].name+" : "+allContestants[plr].answer,420,display);
      }
    }
    //write code to add a note here
    
    //write code to highlight contest who answered correctly
    
  }

}
