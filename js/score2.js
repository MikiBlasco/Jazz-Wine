//if it is posible we will try to replace the score by a "sprite" of a glass of vine that fills (1/3) with the score and celebrates with a gif when the glass is full 

class Score2 {
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