import { getInputDirection } from "./input.js";




const snakeSpeed = 1;
const snakeBody = [
    {x: 15, y: 15},
    {x: 16, y: 15},
    {x: 17, y: 15},
    {x: 18, y: 15}
];


function updateSnake() {
    const inputDirection = getInputDirection();
    
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}


function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');

        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");

        gameBoard.appendChild(snakeElement);
    });
}





export { snakeSpeed, updateSnake, drawSnake };