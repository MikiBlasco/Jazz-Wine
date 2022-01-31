class Player {
    constructor(ctx) {
        
        this.ctx = ctx;

        //size
        this.width = 135;
        this.height = 145;

         //coordinates
        this.x = 500;
        this.y = 355;
       
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
            this.x,
            this.y,
            this.width,
            this.height,
            
        );
    }

    collidesWith(object) {

        if (this.x < object.x + object.width && this.x + this.width > object.x &&
            this.y < object.y + object.height && this.y + this.width > object.y) {
                return true
            }

    }

    exitsCanvas() {
        if (this.x > this.ctx.canvas.width) {
            this.x = -50
        }
        if (this.x + this.width < 0) {
            this.x = this.ctx.canvas.width
        }
    }
}

