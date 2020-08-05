import { snakeSpeed, updateSnake, drawSnake, getSnakeHead, outOfGrid } from "./snake.js";
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





function update() {
    updateSnake();
    updateApple();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawApple(gameBoard);
}


function checkDeath() {
    if(outOfGrid(getSnakeHead()) == true) {
        gameOver = true;
    }
}
