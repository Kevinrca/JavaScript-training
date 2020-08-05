
let apple = {x: 1, y: 1};


function updateApple() {
    
}


function drawApple(gameBoard) {
    const appleElement = document.createElement('div');

    appleElement.style.gridRowStart = apple.y;
    appleElement.style.gridColumnStart = apple.x;
    appleElement.classList.add("apple");

    gameBoard.appendChild(appleElement);

}


export { drawApple, updateApple };