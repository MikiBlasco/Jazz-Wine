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
        this.img.src = "images/background night.png"
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
       
        if(score >= 0 && score >= 9) {
            this.img = new Image()
            this.img.src = "images/background foggy.png"
            flauta.play();
        } 
        if(score >= 10 && score < 40) {
            this.img = new Image()
            this.img.src = "images/background night.png"
            flauta.play();
        }
        if(score >= 40 && score < 70) {           
            this.img = new Image()
            this.img.src = "images/background bad.png"
            flauta.pause()
            intro.play()            
        }
        if(score >= 70 && score < 80 ) {
            this.img = new Image()
            this.img.src = "images/background sweet.jpg"
            flauta.pause()
            intro.pause()
            song1.play()
        }
        if(score >= 80 ) {
            this.img = new Image()
            this.img.src = "images/background fantasy1.jpg"
            flauta.pause()
            intro.pause()
            song1.pause()
            epic.play()
        }
  }

}