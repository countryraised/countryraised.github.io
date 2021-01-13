# Project1-game
Attempting the Tower of Hanoi game

Puzzle strategy game of moving blocks in order to another position.

I used Javascript, css, and html.


## MVP to work.

User should be able to to move top block from 1 column to next.

User should only be able to move top block. 

User should only be able to place block on top of a larger block.

Inform user of Win.


## extra goals;
User should be able to reset or restart game without refreshing page.(complete)

track wins. (completed)

change difficulty by adding or removing blocks.

track number of moves.

timer.


## things I tried along the way

Putting event listeners on the blocks at the same time as the containers. 
This caused issues with clicking on a block did not trigger the event on the container also.

// const block = document.querySelectorAll(".block");
// blocks need event listeners.
// for(i=0; i<5; i++){
//     block[i].addEventListener("click", chooseBlock);
//     console.log(block[i]);
// }

// function chooseBlock(e){
//     if (choice = null){
//         choice = e.target;
//         choice.style.background = blue;
//         console.log("block " + choice);
//     }
// };


Lots of goodle searches for Tower of Hanoi deal with recursion, almost all of them are talking about solving the problem rather than creating the game. Recursion maybe could have been used in place of my for loop to add event listeners. 

    // Recursion. I believe this allows completion of the game without moving peices individually?
//moveTower(disk, source, dest, spare);  for:: disk=5 source=A dest=B spare=C
//  If disk == 0 then: move disk from source to destination.
//  Else 
//      MoveTower(disk -1, souece, spare, dest)
//      move disk from source to destination
//      MoveTower(disk-1), spare, dest, source)
//  End If