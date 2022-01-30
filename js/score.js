class Score {
    constructor(ctx){
        this.ctx = ctx;
        //position
        this.x = 700;
        this.y = 100;
        //size oof the score
        this.width = 50;
        this.height = 70;
        //image
        this.img = new Image()
        this.img.src = "/images/wine_glass.png"
    }

    draw(){
        this.ctx.drawImage(
            this.img,   
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}