class Cat {
    constructor(ctx, x, y) {       
        this.ctx = ctx;
        //size of the bottle
        this.width = 120
        this.heigh = 120
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 2;
        this.vy = 2;  
        //image
        this.img = new Image();
        this.img.src = "/images/cat ninja.png"
    }
    
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    move() {

        if(game.frameNumber % 320 === 0) {    

            this.x = Math.floor((Math.random() * (this.ctx.canvas.height - 10)) + 10)

            this.y = 0,

            cats.push(new Cat(ctx, this.x, this.y)),

            console.log("cats=",cats ,"x=", this.x, "y=", this.y) 

        }

        //giving them gravity to fall from y=0 -> down.
        cats.forEach(i=> i.y + i.vy)

    }

    //drawing the cats from the array one by one.
    draw() {
        cats.forEach(object=>{
            ctx.drawImage(
                object.img,
                object.width,
                object.height,
                object.x,
                object.y,
            );
            console.log(object)
        })                   
    }    
}