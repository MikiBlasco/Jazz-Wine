class Glass {
    constructor(ctx, x, y) {

        this.ctx = ctx;
        //array for glasses generation
        this.glasses = [];
        //image
        this.img = new Image();
        this.img.src = "images/wine glass3.png"
        
        //size of the cat
        this.width = 25
        this.height =50
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 2;
        this.vy = 1.5; 
        //key
        this.collision = false
            
    }

    generate(frameNumber) {

        if(frameNumber > 20 && frameNumber % 150 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width)) - 25),
            this.y = -10,
            this.glasses.push(new Glass(ctx, this.x, this.y))         
        }
        return this.glasses       
    }

    checkCollision() {

        if (this.glasses.some((object) =>
        game.player.collidesWith(object)) !== this.collision)
        return this.collision = !this.collision
    }


    destroy() {

        this.glasses.forEach(object => {
            if (game.player.collidesWith(object)){
                let index = this.glasses.indexOf(object)

                this.glasses.splice(index,1)
                
            }
        })
    }
    
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    move() {

        this.glasses.forEach(object=>{
            object.y += object.vy
        })
    }

    //drawing the cats from the array one by one.
    draw() {

         this.glasses.forEach(object=>{
            this.ctx.drawImage(
                object.img,
                object.x,
                object.y,               
                object.width,
                object.height,
                
            );
        })                    
    }    
}