import {  canvas, ctx, scale, apple  } from "./game.js";

class Snake {
    constructor() {
        // head coordonates
        this.x = 0;
        this.y = 0;

        // 
        this.xSpeed = scale * 1;
        this.ySpeed = scale * 0;

        this.totalAppleEaten = 0;
        this.tail = [];
    }
    
    draw = () => {
        ctx.fillStyle = "white";

        for(let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);

    }

    update = () => {
        for(let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.totalAppleEaten - 1] = { x: this.x, y: this.y };


        this.x += this.xSpeed;
        this.y += this.ySpeed;


        // Handle the exit of the board
        if(this.x > (canvas.width - scale)) {
            this.x = 0;
        }

        if(this.x < 0) {
            this.x = (canvas.width - scale);
        }

        if(this.y > (canvas.height - scale)) {
            this.y = 0;
        }

        if(this.y < 0) {
            this.y = (canvas.height - scale);
        }
    }


    eatApple = (apple) => {
        if(this.x === apple.x && this.y === apple.y) {
            this.totalAppleEaten++;
            return true;
        }
        else {
            return false;
        }
    }

    checkCollision = () => {
        for(let i = 0; i < this.tail.length; i++) {
            if(this.x === this.tail[i].x && this.y === this.tail[i].y) {
                return true;
            }
        }
    }




    changeDirection = (direction) => {
        switch(direction) {
            case "Up":
                if(this.ySpeed !== 0) {
                    break;
                }
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;

            case "Down":
                if(this.ySpeed !== 0) {
                    break;
                }
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            
            case "Left":
                if(this.xSpeed !== 0) {
                    break;
                }
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;

            case "Right":
                if(this.xSpeed !== 0) {
                    break;
                }
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }
}

export { Snake };
