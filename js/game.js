class Game {
    constructor(ctx, player, bottle, cat, catNinja, background, score) {
        this.ctx = ctx;
        this.player = player;
        this.bottle = bottle;
        this.bottles = [];
        this.cat = cat;
        this.cats = [];
        this.catNinja = catNinja;
        this.catsN = [];
        this.background = background;
        this.score = score;
        this.frameNumber = 0;
        this.x;
        this.y;
        this.score = 10;
        this.collision = false;
        this.reward = false;
        this.pain = true
    }

    play(){
        this.generateCats();
        this.generateCatsNinja();
        this.generateBottles()
        this.move();        
        this.draw();
        this.drawScore();
        if (this.gameOver()) this.stop();
        if(this.frameNumber !== null) {
            this.frameNumber = requestAnimationFrame(this.play.bind(this));
        }
    }

    stop(){
            cancelAnimationFrame(this.frameNumber);
            this.frameNumber = null; 
    
    }


    generateCats() {

        if(game.frameNumber > 50 && game.frameNumber % 120 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width))),
            this.y = -10,
            //console.log(this.x, this.y)
            this.cats.push(new Cat(ctx, this.x, this.y))
            //console.log("cats=",this.cats)            
        }

        return this.cats
    
    } 

    generateCatsNinja() {

        if(game.frameNumber > 100 && game.frameNumber % 350 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width))),
            this.y = -10,
            this.catsN.push(new CatNinja(ctx, this.x, this.y))
            console.log("catsN=",this.catsN)            
        }

        return this.catsN
    
    } 

    generateBottles() {

        if(game.frameNumber > 20 && game.frameNumber % 320 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30)) + 20),
            this.y = -10,
            //console.log(this.x, this.y)
            this.bottles.push(new Bottle(ctx, this.x, this.y))
            //console.log("bottles=",this.bottles)            
        }

        return this.bottles
    
    }

    move(){
        this.player.move(),
        this.player.exitsCanvas(),
        this.bottle.move(this.bottles),
        this.catNinja.move(this.catsN),
        this.cat.move(this.cats)
        
    }


    draw(){
        //this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.background.draw(),
        this.bottle.draw(this.bottles),
        this.cat.draw(this.cats),
        this.catNinja.draw(this.catsN),
        this.player.draw()         
        //this.score.draw()  
    }

    
    checkCollision(){

     if (this.cats.some((object) =>
        this.player.collidesWith(object)) !== this.collision){
        return this.collision = !this.collision
        }
       this.cats.forEach(object => {
           if (this.player.collidesWith(object)){
               let index = this.cats.indexOf(object)
               
               this.cats.splice(index,1)
           }          
       })
    }

    checkCollisionNinja(){

       if (this.catsN.some((object) =>
        this.player.collidesWith(object)) !== this.pain){
        return this.pain = !this.pain
        }

      // eliminate the object once we collide.
      this.catsN.forEach(object => {
      if (this.player.collidesWith(object)){
      let index = this.catsN.indexOf(object)
    
      this.catsN.splice(index,1)
                    
            }
        })
    }

    checkReward(){
       // chek if there is some collision (we can join both)
        if (this.bottles.some((object) =>
        this.player.collidesWith(object)) !== this.reward)
        return this.reward = !this.reward

       // eliminate the object once we collide.
        this.bottles.forEach(object => {
            if (this.player.collidesWith(object)){
                let index = this.bottles.indexOf(object)

                this.bottles.splice(index,1)
                
            }
        })
    }

    drawScore(){

        if (this.checkReward() === true) this.score += 1
        if (this.checkCollision() === true) this.score -= 1
        if (this.checkCollisionNinja()=== true) this.score -=5
        this.x = 50;
        this.y = 110;
        this.width = 100;
        this.height = 50;
        this.ctx.fillStyle = "#b1e4f8";
        this.ctx.font = " bold 100px sans-serif"
        this.text = ctx.fillText(`${this.score}`, this.x, this.y)

    };

    gameOver(){
        if(this.score <= 0) return true
    }




    
}