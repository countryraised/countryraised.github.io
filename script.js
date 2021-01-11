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
// function chooseBlock(){
//     if (choice= null){
//         choice = block[i];
//         console.log(choice);
//     }
// };

// choose starting block container
function chooseContainer(evt){
    if (fromCont == null
    ){
        fromCont = evt.target;
        console.log(fromCont);
    }
    else if(fromCont != null && toCont == null){
        toCont = evt.target;
            console.log(toCont);
        //compare block sizes
    }
};


// compare chosen block to block in destination container
// function compare()


// if smaller place block, invalid don't move cancel chosen block?
// add block to destination container


// ?cancel chosen block
