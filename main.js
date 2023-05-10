//parameters for the fields
const playerT=document.querySelector("#playerText");
const computerT=document.querySelector("#computerText");
const resultT=document.querySelector("#resultText");
let player;
let computer;
let result;


//.choiceBtn because we are choosing a classs
const choiceBtn=document.querySelectorAll(".choiceBtn");

//add for each element in the choiceBtn listner on click do something.
choiceBtn.forEach(button => button.addEventListener("click",()=>{

    player=button.textContent;
    computerTurn();
    playerT.textContent=`Player: ${player}`;
    computerT.textContent=`Computer: ${computer}`;
    resultT.textContent=checkWinner();

}));

function computerTurn() {
    const random = Math.floor( Math.random()*3)+1;
switch(random) {
    case 1:
        computer="ROCK";
        break;
        case 2:
            computer="PAPER";
            break;
            case 3 :
                computer="SCISSORS";
                break;
    }
}

function checkWinner(){

    if(player==computer){
        return "Result: No-Winner";
    }
    else if(computer=="ROCK"){
        return (player=="PAPER")? "You win": "You Lose";
    }else if(computer=="PAPER"){
        return (player=="SCISSORS")? "You win": "You Lose"; ;
}else if(computer=="SCISSORS"){
    return (player=="ROCK")? "You win": "You Lose"; ;
}

}