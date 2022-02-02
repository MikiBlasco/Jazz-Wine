class CatNinja {
    constructor(ctx, x, y) {       
        this.ctx = ctx;

        this.catsN = [];
        //image
        this.img = new Image();
        this.img.src = "/images/cat-2.png"        
       //size of the cat
        this.width = 100
        this.height = 110
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 0;
        this.vy = 3.9;
        //key
        this.collision = false            
    }

    generate(score, frameNumber) {

        if(score > 50 && score < 80) {
        if(frameNumber > 100 && frameNumber % 420 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30)) + 20),
            this.y = -10,
            this.catsN.push(new CatNinja(ctx, this.x, this.y))           
        }
    }
       if(score >= 80 && score <= 100){
        if(frameNumber > 100 && frameNumber % 190 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30)) + 20),
            this.y = -10,
            this.catsN.push(new CatNinja(ctx, this.x, this.y))           
        }
       }

        return this.catsN
    
    } 

    checkCollision(){

        if (this.catsN.some((object) =>
         game.player.collidesWith(object)) !== this.collision){
         return this.collision = !this.collision
         }
 
     }

    destroy(){
        this.catsN.forEach(object => {
            if (game.player.collidesWith(object)){
            let index = catNinja.catsN.indexOf(object)          
            catNinja.catsN.splice(index,1)                         
                  }
              })
    }
    

    move() {
        this.catsN.forEach(object=>{
            object.y += object.vy
            object.x += object.vx
        })
    }

    draw() {

         this.catsN.forEach(object=>{
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