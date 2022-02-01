class BottleBig {
    constructor(ctx, x, y) {       
        this.ctx = ctx;
        //image

        this.img = new Image();
        this.img.src = "/images/wine-bottle1.png"
        
        //size of the cat
        this.width = 35
        this.height =75
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 2;
        this.vy = 3;  
            
    }

    
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    move(bottlesBig) {
        bottlesBig.forEach(object=>{
            object.y += object.vy
        })
    }

    //drawing the cats from the array one by one.
    draw(bottlesBig) {

         bottlesBig.forEach(object=>{
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