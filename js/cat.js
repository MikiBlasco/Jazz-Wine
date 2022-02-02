class Cat {
    constructor(ctx, x, y) {       
        this.ctx = ctx;
        this.cats = [];

        this.img = new Image();
        this.img.src = "/images/cat-3.png"
        
        //size of the cat
        this.width = 40
        this.height = 50
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 1;
        this.vy = 1;  
            
    }

    
    generate(score) {

        if (score > 25 && score < 30) {

        if(game.frameNumber > 50 && game.frameNumber % 120 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30))),
            this.y = -10,
            //console.log(this.x, this.y)
            this.cats.push(new Cat(ctx, this.x, this.y))
            //console.log("cats=",this.cats)            
        }
    }

        if (score > 20 && score < 80) {

            if(game.frameNumber > 50 && game.frameNumber % 100 === 0) {    
                this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30))),
                this.y = -10,
                //console.log(this.x, this.y)
                this.cats.push(new Cat(ctx, this.x, this.y))
                //console.log("cats=",this.cats)            
            }
        }
        
        if (score >= 80) {
                if(game.frameNumber > 50 && game.frameNumber % 80 === 0) {    
                    this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30))),
                    this.y = -10,
                    //console.log(this.x, this.y)
                    this.cats.push(new Cat(ctx, this.x, this.y))
                    //console.log("cats=",this.cats)            
                }    
     } 
     return this.cats
   }
    
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    move(cats) {

        cats.forEach(object =>{

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
    draw(cats) {
//         cats.forEach(object=>{
// this.ctx.fillRect(this.x, this.y,this.width, this.height)
//         })
         cats.forEach(object=>{
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