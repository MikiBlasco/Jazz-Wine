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
        this.img.src = "/images/background night.png"
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

    backgroundChange(score) {
        if(score >= 5 && score < 15) {
            this.img = new Image()
            this.img.src = "/images/background night.png"
        }
        /*if(score < 6 && score >= 3) {
            this.img = new Image()
            this.img.src = "/images/background foggy.png"
        }*/
        if(score < 5 && score >= 0) {
            this.img = new Image()
            this.img.src = "/images/background foggy.png"
        }
        if(score >= 15 && score < 25) {
            this.img = new Image()
            this.img.src = "/images/background forest.png"
        }
        if(score >= 25 && score < 35 ) {
            this.img = new Image()
            this.img.src = "/images/background sweet.jpg"
            
        }
        if(score >= 35 ) {
            this.img = new Image()
            this.img.src = "/images/background fantasy1.jpg"
 
        }
  }

}