btn=document.querySelectorAll(".box");
rstBtn=document.querySelector(".Reset");
msgContainer=document.querySelector(".msg-container");
msg=document.querySelector(".msg");
newbtn=document.querySelector(".new-button")
drawnMsg=document.querySelector(".drawn-msg");

const winPatter =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turn0 = true;
let c=0;

const resetButton =()=>{
    turn0=true;
    enabledBtn();
    msgContainer.classList.add("hide")
    c=0;
}   

btn.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn0 ===true){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
        c++
        box.disabled =true;
        console.log(c);
        const isWinner= checkPattern();
        if(c===9 && !isWinner){
            drawnMsg.innerText= "It's a Draw !!";
            msgContainer.classList.remove("hide");
            drawnMsg.classList.remove("hide");
            msg.classList.add("hide");
            c=0;
        }
        
    });
});
const disabledBtn= ()=>{
    for(let box of btn)
    {
        box.disabled =true;
    }
}
const enabledBtn= ()=>{
    for(let box of btn)
    {
        box.disabled =false;
        box.innerText=" "
    }
}

const showDrawn=(c) =>{
    
}

const showWinner=(winner) =>{
    msg.innerText=`Congratulations ${winner} won the Game!!`; 
    msgContainer.classList.remove("hide");
    disabledBtn();
}

const checkPattern = ()=>{
    for(Patterns of winPatter){
        let pos1Val=btn[Patterns[0]].innerText;
        let pos2Val=btn[Patterns[1]].innerText;
        let pos3Val=btn[Patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val ===pos2Val && pos2Val===pos3Val && pos3Val ===pos1Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;
}

newbtn.addEventListener("click",resetButton);
rstBtn.addEventListener("click",resetButton);
