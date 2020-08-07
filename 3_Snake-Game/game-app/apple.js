import {  canvas, ctx, scale, snake, rows, columns } from "./game.js";


class Apple {
    constructor() {
        this.x;
        this.y;
    }


    randomPosition = () => {
        this.x = (Math.floor(Math.random() * rows - 1) + 1)* scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    draw = () => {

        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

}

export { Apple };