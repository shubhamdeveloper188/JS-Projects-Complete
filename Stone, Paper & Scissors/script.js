let user_Score =0;
let comp_Score =0;
let countUsr =0;
let countComp=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersScore=document.querySelector("#users-score");
const compScore=document.querySelector("#comp-score");

const genCompChoice= ()=>{
    const options =["rock", "paper", "scissors"];
    randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("The game was drawn");
    msg.innerText="The game was drawn!!"
}

const showWinner=(userWin)=>{
    if(userWin ===true){
        console.log("You Win!!");
        msg.innerText="You Win!!"
        msg.style.backgroundColor="green";
        user_Score++;
        usersScore.innerText= user_Score;
    }
    else{
        comp_Score++;
        compScore.innerText= comp_Score;
        console.log("You lose!!");
        msg.innerText="You Lose!!"
        msg.style.backgroundColor="red";
        
    }
}

const playGame=(userChoice) =>{
    console.log(`The item was clicked ${userChoice}`);
    const compChoice=genCompChoice();
    console.log(`This is computer choice ${compChoice}`);

    if(userChoice ===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock")
        {
            userWin=compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
            userWin=compChoice === "scissors"? false:true;
        }
        else if (userChoice === "scissors"){
            userWin=compChoice === "rock"? false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})