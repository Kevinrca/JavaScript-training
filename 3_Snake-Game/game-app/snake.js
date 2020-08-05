import { getInputDirection } from "./input.js";


let NewSegments = 0;

const snakeSpeed = 10;
const snakeBody = [
    {x: 15, y: 15},
    {x: 16, y: 15},
    {x: 17, y: 15}
];


function updateSnake() {
    addSegment();

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


function expandSnake(amount) {
    NewSegments += amount;
}


function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPosition(position, segment);
    });
}


function equalPosition(position1, position2) {
    return (position1.x === position2.x && position1.y === position2.y);
}


function addSegment() {
    for(let i = 0; i < NewSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    NewSegments = 0;
}



export { snakeSpeed, updateSnake, drawSnake, onSnake, expandSnake };