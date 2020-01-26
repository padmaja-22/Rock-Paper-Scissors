const match = ()=> {
    let pScore=0;
    let cScore=0;

//start the match
    const startMatch = ()=>{
        const playBtn=document.querySelector(".intro button"); 
        const introScreen=document.querySelector(".intro");
        const game=document.querySelector(".game");

        playBtn.addEventListener("click",()=>{
            introScreen.classList.add("fadeOut");
            game.classList.add("fadeIn");
        });
    };

const playGame=()=>{
    const options=document.querySelectorAll(".options button");
    const playerHand=document.querySelector(".player-hand");
    const computerHand=document.querySelector(".computer-hand");
    const hands=document.querySelectorAll(".hands img");

    hands.forEach(hand=>{
        hand.addEventListener("animationend",function(){
            this.style.animation="";
        });
    });
    //computer options
    const computerOptions=["Rock","Paper","Scissors"];

    options.forEach(option=>{
        option.addEventListener("click",function(){
//computer choice
            const computerNumber=Math.floor(Math.random()*3);
            const computerChoice=computerOptions[computerNumber];

           setTimeout(()=>{
            compareHands(this.textContent,computerChoice);

            playerHand.src=`./images/${this.textContent}.png`;
            computerHand.src=`./images/${computerChoice}.png`;
           },2000);

            playerHand.style.animation="shakePlayer 2s ease";
            computerHand.style.animaiton="shakeComputer 2s ease";

        });
    });
};
 const updateScore=()=>{
     const playerScore=document.querySelector(".player-score p");
     const computerScore=document.querySelector(".computer-score p");
     playerScore.textContent=pScore;
     computerScore.textContent=cScore;
 }
 const compareHands=(playerChoice,computerChoice)=>{
     const winner=document.querySelector(".winner");
     if(playerChoice===computerChoice){
         winner.textContent="It's a tie";
         return;
     }
     if(playerChoice==="Rock"){
         if(computerChoice==="Scissors"){
             winner.textContent=" Player wins";
             pScore++;
             updateScore();
             return; 
         }
         else{
             winner.textContent="Computer wins";
             cScore++;
             updateScore();
             return;
         }
     }
     if(playerChoice==="Paper"){
        if(computerChoice==="Scissors"){
            winner.textContent=" Computer wins";
            cScore++;
            updateScore();
            return; 
        }
        else{
            winner.textContent="Player wins";
            pScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice==="Scissors"){
        if(computerChoice==="Rock"){
            winner.textContent=" Computer wins";
            cScore++;
            updateScore();
            return; 
        }
        else{
            winner.textContent="Player wins";
            pScore++;
            updateScore();
            return;
        }
    }
 };
     
//calling the inner function
    startMatch();
    playGame();
       
};

match();