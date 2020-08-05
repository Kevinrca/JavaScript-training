
import { onSnake, expandSnake } from "./snake.js";


let apple = randomApplePosition();
const expansionRate = 2;


function updateApple() {
    if(onSnake(apple)) {
        expandSnake(expansionRate);
        apple = randomApplePosition();
    }
}



function drawApple(gameBoard) {
    const appleElement = document.createElement('div');

    appleElement.style.gridRowStart = apple.y;
    appleElement.style.gridColumnStart = apple.x;
    appleElement.classList.add("apple");

    gameBoard.appendChild(appleElement);

}


function randomApplePosition() {
    let newApplePosition;

    while(newApplePosition == null || onSnake(newApplePosition)) {
        newApplePosition = {
            x: Math.floor(Math.random() * 30) + 1,
            y: Math.floor(Math.random() * 30) + 1
        }
    }

    return newApplePosition;
}


export { drawApple, updateApple };