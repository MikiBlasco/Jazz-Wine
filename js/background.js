class Background {
    constructor(ctx){
        this.ctx = ctx;
        //size of the background covering all canvas size
        this.width = ctx.canvas.width;
        this.height = ctx.canvas.height;

        //position of the background image
        this.x = 0;
        this.y = 0;
        
        //image
        this.img = new Image()
        this.img.src = "/images/back ground night.png"
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}