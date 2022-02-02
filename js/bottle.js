class Bottle {
    constructor(ctx, x, y) {       
        this.ctx = ctx;

        this.bottles = [];

        //image

        this.img = new Image();
        this.img.src = "/images/wine glass3.png"
        
        //size of the cat
        this.width = 30
        this.height =65
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 2;
        this.vy = 1.5; 
        //key
        this.collision = false
            
    }

    generate(score, frameNumber) {

        if(frameNumber > 20 && frameNumber % 150 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30)) + 20),
            this.y = -10,
            //console.log(this.x, this.y)
            this.bottles.push(new Bottle(ctx, this.x, this.y))
            //console.log("bottles=",this.bottles)            
        }

        return this.bottles
    }

    checkCollision(){

        if (this.bottles.some((object) =>
        game.player.collidesWith(object)) !== this.collision)
        return this.collision = !this.collision

    }


    destroy(){
        this.bottles.forEach(object => {
            if (game.player.collidesWith(object)){
                let index = this.bottles.indexOf(object)

                this.bottles.splice(index,1)
                
            }
        })
    }

    
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    move() {
        this.bottles.forEach(object=>{
            object.y += object.vy
        })
    }

    //drawing the cats from the array one by one.
    draw() {

         this.bottles.forEach(object=>{
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