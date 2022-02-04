class Cat {
    constructor(ctx, x, y) {       
        this.ctx = ctx;
        //this.cats = cats;

        this.cats = [];

        this.img = new Image();
        this.img.src = "images/cat-3.png"
        
        //size of the cat
        this.width = 35
        this.height = 42
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 1;
        this.vy = 1;
        //key
        this.collision = false 
            
    }
     
        
    generate(score, frameNumber) {

       if (score > 0 && score < 30) {

        if(frameNumber > 50 && frameNumber % 320 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 35))),
            this.y = -10,
            this.cats.push(new Cat(ctx, this.x, this.y))         
        }
    }
        if (score > 20 && score < 80) {


            if(frameNumber > 50 && frameNumber % 180 === 0) {    
                this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 35))),
                this.y = -10,
                this.cats.push(new Cat(ctx, this.x, this.y))           
            }
        }
        
        if (score >= 80) {
                if(frameNumber > 50 && frameNumber % 60 === 0) {    
                    this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 35))),
                    this.y = -10,
                    this.cats.push(new Cat(ctx, this.x, this.y))          
                }    
     } 
   }

   checkCollision(){

    if (cat.cats.some((object) =>
       game.player.collidesWith(object)) !== this.collision){
       return this.collision = !this.collision
       }

   }

   destroy(){
    this.cats.forEach(object => {
        if (game.player.collidesWith(object)){
            let index = cat.cats.indexOf(object)             
            this.cats.splice(index,1)  
           //return collision = !collision        
        }          
    })
   }
    
    move() {

        this.cats.forEach(object =>{

            if(Math.random() > 0.5){
                object.y += object.vy
                object.x -= object.vx
            } else {
                object.y += object.vy
                object.x += object.vx
            }
            //if(Math.random() < 0.5)

            }
        )
     
    }

    //drawing the cats from the array one by one.
    draw() {
         this.cats.forEach(object=>{
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