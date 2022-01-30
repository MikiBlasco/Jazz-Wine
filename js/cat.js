class Cat {
    constructor(ctx, x) {
        this.ctx = ctx;
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = 0; //top of y axi.

        //size of the bottle
        this.width = 40
        this.heigh = 60

        //velocity
        this.vx = 2;
        this.vy = 2;
   
        //image
        this.img = new Image();
        this.img.src = "/images/kisspng-grumpy-cat-titleist-golf-clubs-5ae06af92604a5.9319194815246568891557.png"
    }

    move() {
        //moving trough "y" coordinate but maybe we will use "x" on the future
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

    
}