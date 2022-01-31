class CatNinja {
    constructor(ctx, x, y) {       
        this.ctx = ctx;
        //image
        this.img = new Image();
        this.img.src = "/images/cat-2.png"        
       //size of the cat
        this.width = 90
        this.height = 100
        //coordinates
        this.x = x; //randomness on the x that we will build on a function?
        this.y = y; //begining of "y" axi = 0
        //velocity
        this.vx = 0;
        this.vy = 3.8;              
    }

    move(catsN) {
        catsN.forEach(object=>{
            object.y += object.vy
            object.x += object.vx
        })
    }

    draw(catsN) {

         catsN.forEach(object=>{
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