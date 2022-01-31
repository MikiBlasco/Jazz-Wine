class Cat {
    constructor(ctx, x, y) {       
        this.ctx = ctx;
        //image

        this.img = new Image();
        this.img.src = "/images/cat-2.png"
        
        //size of the cat
        this.width = 100
        this.height = 100
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 2;
        this.vy = 2;  
            
    }

    
    //creating cats every certain time, pushing them into the array and asigning a random x value (de y value will always be 0 since they fall from the top)
    move(cats) {
        cats.forEach(object=>{
            object.y += object.vy
        })
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