import { snakeSpeed, updateSnake, drawSnake, getSnakeHead, outOfGrid, snakeColision } from "./snake.js";
import { updateApple, drawApple } from "./apple.js";


const gameBoard = document.querySelector(".gameBoard");

let lastRenderTime = 0;

let gameOver = false;


// Game loop
function main (currentTime) {
    window.requestAnimationFrame(main);

    checkDeath();

    if(gameOver) {
        alert("Game Over");
        return;
    }

    const timeSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(timeSinceLastRender < 1 / snakeSpeed) {
        return;
    }
    lastRenderTime = currentTime;

    update();
    draw();

}

window.requestAnimationFrame(main);




// update the snake and the apple on the game board
function update() {
    updateSnake();
    updateApple();
}


// draw the snake and the apple on the game board
function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawApple(gameBoard);
}


// check id the snake touch the edge of the board or itself
function checkDeath() {
    if (outOfGrid(getSnakeHead()) || snakeColision()) {
        gameOver = true;
    }
}
