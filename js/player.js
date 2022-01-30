class Player {
    constructor(ctx) {
        this.ctx = ctx;
        //size
        this.width = 20;
        this.height = 1;
        
        //coordinates
        this.x = 500;
        this.y = ctx.canvas.height;

        //velocity
        this.vx = 0;
        this.vy = 0;

        //image
        this.img = new Image();
        this.img.src = "/images/Jazz-No-border.png"


    }

    move() {
        //moving trough "x" coordinate but maybe we will use "y" on the future
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.width,
            this.height,
            this.x,
            this.y,
        );
    }

    collidesWith(object) {
        return (this.x < object.x + object.width && this.x + this.width > object.x &&
            this.y < object.y + object.height && this.y + this.width > object.y)

    }

    exitsCanvas() {
        return this.x > this.ctx.canvas.width || this.x + this.width < 0;
    }
}

