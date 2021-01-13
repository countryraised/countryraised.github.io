// container and block selectors
const container = document.querySelectorAll(".container");
const block = document.querySelectorAll(".block");
const reset = document.querySelector(".reset");

// store selected block and containers from and to
let choice ;   //selected block
let fromCont ;     //1st selcted container
let toCont ;    //2nd selected destination container
let original= document.querySelector(".gamecontainer").innerHTML;
let winCount = 0;
// game starts when page refreshed?
document.onload = start();

// containers need event listeners.
function start(){
    for(i=0; i<3; i++){
        container[i].addEventListener("click", chooseContainer);
        console.log(container[i]);
    }  // blocks need event listeners.
    // for(i=0; i<5; i++){
    //     block[i].addEventListener("click", chooseBlock);
    //     console.log(block[i]);
    // }
};

// selected block
// function chooseBlock(e){
//     if (choice = null){
//         choice = e.target;
//         choice.style.background = blue;
//         console.log("block " + choice);
//     }
// };

// choose starting block container  || had all working unless user clicks on empty container first.
function chooseContainer(evt){
    if (fromCont == null && evt.target.querySelector(".block") !=null) {  
        fromCont = evt.target;
        choice = fromCont.querySelector(".block");
        // console.log(`from ${fromCont.id}`);
        // console.log(fromCont.firstChild);
        // console.log(`block ${choice.id}`);
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
// function compare()
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
        // console.log(choiceWdth);
        // console.log(toContWdth);
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
                
    }
    else{
        return
    }
}

reset.addEventListener("click", function(){
    location.reload();
    // document.querySelector(".gamecontainer").innerHTML = original;
    // // resetBoard();
    // choice = null;
    // fromCont = null;
    // toCont =null;
    // start();
});

// function resetBoard() {
//     document.querySelector("#cntnTwo").innerHTML = "";
//     document.querySelector("#cntnThree").innerHTML = "";
//     document.querySelector("#cntnThree").innerHTML = "";
//     createElement()
// }




// Recursion. I believe this allows completion of the game without moving peices individually?
//moveTower(disk, source, dest, spare);  for:: disk=5 source=A dest=B spare=C
//  If disk == 0 then: move disk from source to destination.
//  Else 
//      MoveTower(disk -1, souece, spare, dest)
//      move disk from source to destination
//      MoveTower(disk-1), spare, dest, source)
//  End If