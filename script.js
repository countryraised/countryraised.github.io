// container and block selectors
const container = document.querySelectorAll(".container");
const block = document.querySelectorAll(".block");


// store selected block and containers from and to
let choice ;   //selected block
let fromCont ;     //1st selcted container
let toCont ;    //2nd selected destination container

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

// choose starting block container
function chooseContainer(evt){
    if (fromCont == null
    ){  
        fromCont = evt.target;
        fromCont.firstChild=choice;
        console.log(`from ${fromCont}`);
        console.log(`block ${choice}`);
    }
    else if(fromCont != null && toCont == null){
        toCont = evt.target;
            console.log(`to ${toCont}`);
        //compare block sizes
    }
};




// compare chosen block to block in destination container
// function compare()
// function compare(){
//     if//(current block vs existing? block? is there a block?)
//         (){

//         }
// };

// if smaller place block, invalid don't move cancel chosen block?
// add block to destination container


// ?cancel chosen block




// Recursion. I believe this allows completion of the game without moving peices individually?

//moveTower(disk, source, dest, spare);  for:: disk=5 source=A dest=B spare=C
//  If disk == 0 then: move disk from source to destination.
//  Else 
//      MoveTower(disk -1, souece, spare, dest)
//      move disk from source to destination
//      MoveTower(disk-1), spare, dest, source)
//  End If