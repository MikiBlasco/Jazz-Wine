class BottleBig {
    constructor(ctx, x, y) {       
        this.ctx = ctx;

        this.bottlesBig = [];
        //image

        this.img = new Image();
        this.img.src = "images/wine-bottle1.png"
        
        //size of the cat
        this.width = 48
        this.height =100
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 2;
        this.vy = 2.5;
        //key
        this.collision = false   
            
    }

    generate(score, frameNumber){

        if(frameNumber > 20 && frameNumber % 820 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30)) + 20),
            this.y = -10,
            this.bottlesBig.push(new BottleBig(ctx, this.x, this.y))         
        }
        return this.bottlesBig
    }

    checkCollision(){
        // chek if there is some collision (we can join both)
         if (this.bottlesBig.some((object) =>
         game.player.collidesWith(object)) !== this.collision)
         return this.collision = !this.collision
    }
   
    destroy(){
        this.bottlesBig.forEach(object => {
            if (game.player.collidesWith(object)){
                let index = this.bottlesBig.indexOf(object)

                this.bottlesBig.splice(index,1)
                
            }
        })
    }
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    move() {
        this.bottlesBig.forEach(object=>{
            object.y += object.vy
        })
    }

    //drawing the cats from the array one by one.
    draw() {

         this.bottlesBig.forEach(object=>{
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