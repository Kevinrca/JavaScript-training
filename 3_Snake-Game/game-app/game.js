import { Snake } from "./snake.js";
import { Apple } from "./apple.js";

const displayScore = document.querySelector(".score");

// Setup the game board
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let apple;





// Run the game by updating and drawing the snake and the fruit
function main() {
    snake = new Snake();
    apple = new Apple();

    snake.draw();
    apple.randomPosition();

    window.setInterval(() => {
        displayScore.innerHTML = `score: ${snake.totalAppleEaten}`;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        apple.draw();

        snake.update();
        snake.draw();

        if(snake.eatApple(apple)) {
            apple.randomPosition();
        }

        if(snake.checkCollision()) {
            alert(`Perdu\nVotre score: ${snake.totalAppleEaten}`);
            snake.totalAppleEaten = 0;
            snake.tail = [];
        }


    }, 80);
}
main();



// Change the direction when a key is down
window.addEventListener("keydown", (event) => {
    const direction = event.key.replace("Arrow", "");
    
    snake.changeDirection(direction);
});






export { canvas, ctx, scale, snake, apple, rows, columns };