class Bottle {
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
        this.img.src = "/images/wine_bottle.png"
    }


    //creating bottles every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    generateCats() {
        game.frameNumber += 1;
        if(game.frameNumber % 10 === 0) {
            this.x = Math.floor(Math.random()* 8 + 1)
            bottles.push(new Cat(ctx, x))
            
        }
    }

    move() {
        //moving trough "y" coordinate but maybe we will use "x" on the future
        this.x += this.vx;
        this.y += this.vy;
    }

    //drawing the bottles from the array one by one.
    draw() {
        bottles.forEach(object => {
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