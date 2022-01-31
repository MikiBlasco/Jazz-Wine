class Game {
    constructor(ctx, player, bottle, cat, background, score) {
        this.ctx = ctx;
        this.player = player;
        this.bottle = bottle;
        this.bottles = [];
        this.cat = cat;
        this.cats = [];
        this.background = background;
        this.score = score;
        this.frameNumber = 0;
        this.x 
    }

    play(){
        this.generateCats();
        this.generateBottles()
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

    generateCats() {

        if(game.frameNumber % 320 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 20)) + 20),
            this.y = 5,
            console.log(this.x, this.y)
            this.cats.push(new Cat(ctx, this.x, this.y)),
            console.log("cats=",this.cats)            
        }

        return this.cats
    
    } 

    generateBottles() {

        if(game.frameNumber % 120 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 20)) + 20),
            this.y = 5,
            console.log(this.x, this.y)
            this.bottles.push(new Bottle(ctx, this.x, this.y)),
            console.log("bottles=",this.bottles)            
        }

        return this.bottles
    
    }

    move(){
        this.player.move(),
        this.player.exitsCanvas(),
        this.bottle.move(this.bottles),
        this.cat.move(this.cats)
    }


    draw(){
        //this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.background.draw(),
        this.bottle.draw(this.bottles),
        this.cat.draw(this.cats),
        this.player.draw(),         
        this.score.draw()  
    }

    
    checkCollision(){
        let collision = false
        
        if (this.cats.some((object) => 
        this.player.collidesWith(object))) 
        {collision = true}
    }
    
}