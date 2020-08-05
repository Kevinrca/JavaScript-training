import { snakeSpeed, updateSnake, drawSnake } from "./snake.js";
import { updateApple, drawApple } from "./apple.js";


const gameBoard = document.querySelector(".gameBoard");

let lastRenderTime = 0;


// Game loop
function main (currentTime) {
    window.requestAnimationFrame(main);

    const timeSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(timeSinceLastRender < 1 / snakeSpeed) {
        return;
    }
    lastRenderTime = currentTime;

    update();
    draw();

}

window.requestAnimationFrame(main);





function update() {
    updateSnake();
    updateApple();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawApple(gameBoard);
}

