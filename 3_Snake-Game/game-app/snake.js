import { getInputDirection } from "./input.js";


let NewSegments = 0;

const snakeSpeed = 10;
const snakeBody = [
    {x: 15, y: 15}
];


// Update the position the the snake each time the function is called
function updateSnake() {
    addSegment();

    const inputDirection = getInputDirection();
    
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}


// Creat the snake and draw it on the game board
function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');

        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");

        gameBoard.appendChild(snakeElement);
    });
}


// return the position of the head of the snake
function getSnakeHead() {
    return snakeBody[0];
}


// increment at the NewSegment variable the amout we passed in argument
function expandSnake(amount) {
    NewSegments += amount;
}


// return true if the position enter is at the same place as the snake
function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        
        if(ignoreHead == true && index == 0) {
            return false;
        }
        
        return equalPosition(position, segment);
    });
}


// return true if the deux positions are at the same place
function equalPosition(position1, position2) {
    return (position1.x === position2.x && position1.y === position2.y);
}


// add a segment when the snake eat the apple
function addSegment() {
    for(let i = 0; i < NewSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    NewSegments = 0;
}

// check if the snake get out of the game board
function outOfGrid(position) {
    if(position.x < 1 || position.y < 1 || position.x > 30 || position.y > 30) {
        return true;
    }
}

// check if the snake hit itself
function snakeColision() {
    return onSnake(snakeBody[0], {ignoreHead: true});
}



export { snakeSpeed, updateSnake, drawSnake, onSnake, expandSnake, getSnakeHead, outOfGrid, snakeColision };