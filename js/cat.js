class Cat {
    constructor(ctx, x, y) {
        
        this.ctx = ctx;

        //size of the bottle
        this.width = 150
        this.heigh = 150

        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //top of y axi.

        //velocity
        this.vx = 2;
        this.vy = 2;
   
        //image
        this.img = new Image();
        this.img.src = "/images/kisspng-grumpy-cat-titleist-golf-clubs-5ae06af92604a5.9319194815246568891557.png"
    }
     
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)

    move() {
        //moving trough "y" coordinate down but maybe we will use "x" on the future
        if(game.frameNumber % 320 === 0) {            
            this.x = Math.floor((Math.random() * (this.ctx.canvas.height - 10)) + 10)
            this.y = 100
            cats.push(new Cat(ctx, this.x, this.y))    
            console.log("cats=",cats ,"x=", this.x, "y=", this.y) 

        }
        //giving them gravity to fall from y=0 down.
        cats.forEach(i=> i.y + i.vy)

    }

    //drawing the cats from the array one by one.
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