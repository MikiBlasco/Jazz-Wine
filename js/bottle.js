class Bottle {
    constructor(ctx, x, y) {       
        this.ctx = ctx;
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
        this.vy = 1.2;  
            
    }

    
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    move(bottles) {
        bottles.forEach(object=>{
            object.y += object.vy
        })
    }

    //drawing the cats from the array one by one.
    draw(bottles) {

         bottles.forEach(object=>{
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