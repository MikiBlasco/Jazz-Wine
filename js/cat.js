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
     
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    generateCats() {
        game.frameNumber += 1;
        if(game.frameNumber % 10 === 0) {
            this.x = Math.floor(Math.random()* 8 + 1)
            cats.push(new Cat(ctx, x))
            
        }
    }

    move() {
        //moving trough "y" coordinate but maybe we will use "x" on the future
        this.x += this.vx;
        this.y += this.vy;
    }

    //drawing the cats from the array one by one.
    draw() {
        cats.forEach(object => {
            this.ctx.drawImage(
                object.img,
                object.width,
                object.height,
                object.x,
                object.y,
            );
        })
        
    }

    


    
}