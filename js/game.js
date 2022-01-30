console.log("game loaded")

class Game {
    constructor(ctx, player, bottle, cat, background, score) {
        this.ctx = ctx;
        this.player = player;
        this.bottle = bottle;
        this.cat = cat;
        this.background = background;
        this.score = score;
        this.frameNumber = 0;
    }

    play(){
        this.move();
        this.draw();
        if (this.checkCollision()) this.stop();
        if(this.frameNumber !== null) {
            this.frameNumber = requestAnimationFrame(this.play.bind(this));
        }
    }

    stop(){
       cancelAnimationFrame(this.frameNumber);
       this.frameNumber = null; 
    }

    move(){
        this.player.move(),
        this.bottle.move(),
        this.cat.move()
    }

    draw(){
        this.player.draw(),
        this.bottle.draw(),
        this.cat.draw()
    }

    checkCollision(){
        let collision = false
        
        if (this.cats.some((object) => 
        this.player.collidesWith(object))) 
        {collision = true}
    }

    exitsCanvasUpdate(){
        if (
            this.player.exitsCanvas()
        ) {
            //something here. Maybe out from the other side or maybe not allow to go exit.
        }
    }

}