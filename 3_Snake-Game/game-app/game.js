import { snakeSpeed, updateSnake, drawSnake } from "./snake.js";


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
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
}

