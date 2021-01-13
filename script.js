// container and block selectors
const container = document.querySelectorAll(".container");
const reset = document.querySelector(".reset");

// store selected block and containers from and to
let choice ;   //selected block
let fromCont ;     //1st selcted container
let toCont ;    //2nd selected destination container
let winCount = 0;
// game starts when page loaded
document.onload = start();

// containers need event listeners.
function start(){
    for(i=0; i<3; i++){
        container[i].addEventListener("click", chooseContainer);
    }  
};

// choose starting block container  || had all working unless user clicks on empty container first.
function chooseContainer(evt){
    if (fromCont == null && evt.target.querySelector(".block") !=null) {  
        fromCont = evt.target;
        choice = fromCont.querySelector(".block");
        choice.style.background = "blue";
        
    }
    else if(fromCont != null && toCont == null){
        toCont = evt.target;
            console.log(`to ${toCont.id}`);
            compare();
        //compare block sizes
    }else{
        start();
    }
};

// compare chosen block to block in destination container
function compare(){
    if(toCont.querySelector(".block") == null) {  //( to container is empty, move block into container)
            toCont.appendChild(choice);
            choice.style.background = "red";
            choice = null;
            fromCont = null;
            toCont =null;
    }
    else{      //compare choice vs toCont 's existing firstChild
        choiceWdth = choice.id.replace(/\D/g,"");      // turning pixel width to an integer
        toContWdth = toCont.querySelector(".block").id.replace(/\D/g,"");
        
        if( choiceWdth < toContWdth) { //then move chioce into container
            toCont.insertBefore(choice, toCont.firstChild);
            choice.style.background = "red";
            choice = null;
            fromCont = null;
            toCont =null;
            win();
        }else{   // or cancel if move is illegal
            choice.style.background = "red";
            choice = null;
            fromCont = null;
            toCont =null;
        }
    }
};

function win(){
    if(container[0].querySelector(".block") == null && container[1].querySelector(".block") == null){
        console.log("You win.");
        let winner = document.querySelector(".win");
        winner.innerHTML = "YOU WIN!!!";
        winCount++;
        document.querySelector(".winCnt").innerHTML = `Wins = ${winCount}!` ;
    }
    else{
        return
    }
}

reset.addEventListener("click", function(){
    resetBoard()
});

function resetBoard() {
    document.querySelector("#cntnOne").innerHTML = "";
    document.querySelector("#cntnTwo").innerHTML = "";
    document.querySelector("#cntnThree").innerHTML = "";
    for(i=1; i<6; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "bl"+[i]);
        newDiv.setAttribute("class", "block");
        document.querySelector("#cntnOne").appendChild(newDiv);  
    }   
}
