let lastRenderTime = 0;
const snakeSpeed = 1;


// Game loop
function main (currentTime) {
    window.requestAnimationFrame(main);

    const timeSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(timeSinceLastRender < 1 / snakeSpeed) {
        return
    }
    lastRenderTime = currentTime;

}

window.requestAnimationFrame(main);