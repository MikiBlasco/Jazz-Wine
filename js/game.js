class Game {
    constructor(ctx, player, bottle, bottleBig, cat, catNinja, background, score) {
        this.ctx = ctx;
        this.player = player;
        this.bottle = bottle;
        this.bottles = [];
        this.bottleBig = bottleBig;
        this.bottlesBig = [];
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
        this.rewardBig = false;
        this.pain = true
    }

    start(){
        this.play()
    }

    play(){
        this.generateCats();
        this.generateBottlesBig();
        this.generateCatsNinja();
        this.generateBottles()
        this.move();        
        this.draw();
        this.drawScore();
        this.music()
        this.background.backgroundChange(this.score)
        this.GameOver();        
        if(this.frameNumber !== null) {
            this.frameNumber = requestAnimationFrame(this.play.bind(this));
        }
    }

    stop(){
            cancelAnimationFrame(this.frameNumber);
            this.frameNumber = null; 
    
    }


    generateCats() {

        if (this.score > 25 && this.score < 30) {

        if(game.frameNumber > 50 && game.frameNumber % 120 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30))),
            this.y = -10,
            //console.log(this.x, this.y)
            this.cats.push(new Cat(ctx, this.x, this.y))
            //console.log("cats=",this.cats)            
        }
    }

        if (this.score > 20 && this.score < 80) {
            if(game.frameNumber > 50 && game.frameNumber % 100 === 0) {    
                this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30))),
                this.y = -10,
                //console.log(this.x, this.y)
                this.cats.push(new Cat(ctx, this.x, this.y))
                //console.log("cats=",this.cats)            
            }
        }
        
        if (this.score >= 80) {
                if(game.frameNumber > 50 && game.frameNumber % 80 === 0) {    
                    this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30))),
                    this.y = -10,
                    //console.log(this.x, this.y)
                    this.cats.push(new Cat(ctx, this.x, this.y))
                    //console.log("cats=",this.cats)            
                }    
     } 
     return this.cats
   }

    generateCatsNinja() {

        if(this.score > 50 && this.score < 80) {
        if(game.frameNumber > 100 && game.frameNumber % 420 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30)) + 20),
            this.y = -10,
            this.catsN.push(new CatNinja(ctx, this.x, this.y))           
        }
    }
       if(this.score >= 80 && this.score <= 100){
        if(game.frameNumber > 100 && game.frameNumber % 190 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30)) + 20),
            this.y = -10,
            this.catsN.push(new CatNinja(ctx, this.x, this.y))           
        }
       }

        return this.catsN
    
    } 

    generateBottles() {

        if(game.frameNumber > 20 && game.frameNumber % 180 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30)) + 20),
            this.y = -10,
            //console.log(this.x, this.y)
            this.bottles.push(new Bottle(ctx, this.x, this.y))
            //console.log("bottles=",this.bottles)            
        }

        return this.bottles
    }


    generateBottlesBig() {

        if(game.frameNumber > 20 && game.frameNumber % 820 === 0) {    
            this.x = Math.floor((Math.random() * (this.ctx.canvas.width - 30)) + 20),
            this.y = -10,
            //console.log(this.x, this.y)
            this.bottlesBig.push(new BottleBig(ctx, this.x, this.y))
            //console.log("bottles=",this.bottles)            
        }

        return this.bottlesBig
    }

    move(){
        this.player.move(),
        this.player.exitsCanvas(),
        this.bottle.move(this.bottles),
        this.bottleBig.move(this.bottlesBig)
        this.catNinja.move(this.catsN),
        this.cat.move(this.cats)
        
    }


    draw(){
        //this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.background.draw(),
        this.bottle.draw(this.bottles),        
        this.cat.draw(this.cats),
        this.catNinja.draw(this.catsN),
        this.bottleBig.draw(this.bottlesBig),
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
               this.collision = !this-this.collision        
           }          
       })
       if (this.collision === true) {return true}

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

    checkRewardBig(){
        // chek if there is some collision (we can join both)
         if (this.bottlesBig.some((object) =>
         this.player.collidesWith(object)) !== this.rewardBig)
         return this.rewardBig = !this.rewardBig
 
        // eliminate the object once we collide.
         this.bottlesBig.forEach(object => {
             if (this.player.collidesWith(object)){
                 let index = this.bottlesBig.indexOf(object)
 
                 this.bottlesBig.splice(index,1)
                 
             }
         })
     }

    drawScore(){
        if (this.checkReward() === true) this.score += 2
        if (this.checkCollision() === true) this.score -= 1
        if (this.checkRewardBig()=== true) this.score +=3
        if (this.checkCollisionNinja()=== true) this.score -=10

        if (this.score >= 0 && this.score < 100) {
        this.x = 40;
        this.y = 70;
        this.width = 100;
        this.height = 50;
        if (this.score > 3)  this.ctx.fillStyle = "#0b0025";
        if (this.score <=5)  this.ctx.fillStyle = "red"
        if (this.score >=90) this.ctx.fillStyle ="green"
        this.ctx.font = " bold 40px sans-serif"
        if(this.score > 50 && this.score <=80) {    
        this.text = ctx.fillText(`${this.score} points`, this.x, this.y)
        this.text = ctx.fillText(`Level 2`, 700, this.y)}
        else if(this.score > 80 && this.score <=100){      
        this.text = ctx.fillText(`${this.score} points`, this.x, this.y)
        this.text = ctx.fillText(`Level 3`, 700, this.y)}
        else{this.text = ctx.fillText(`${this.score} points`, this.x, this.y)
        this.text = ctx.fillText(`Level 1`, 700, this.y)}

        }

        if(this.score >= 100) {
            this.score = 100
            this.x = 50;
            this.y = 110;
            this.width = 100;
            this.height = 50;
            if (this.score > 3)  this.ctx.fillStyle = "#0b0025";
            if (this.score <=5)  this.ctx.fillStyle = "red"
            if (this.score >=90) this.ctx.fillStyle ="green"
            this.ctx.font = " bold 100px sans-serif"
            this.text = ctx.fillText(`${this.score}`, this.x, this.y)
        }
        
        
    };

    GameOver(){
        if(this.score <= 0) {
            this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.font = "bold 32px sans-serif";
            this.ctx.fillText(
              "Game Over",
              this.ctx.canvas.width / 2,
              this.ctx.canvas.height / 2
            );
            this.stop()
          }

        if(this.score >= 100) {
            this.drawScore()
            this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.font = "bold 50px sans-serif";
            this.ctx.fillText(
              `¡YOU WIN!`,
              this.ctx.canvas.width / 2,
              this.ctx.canvas.height / 2
            );
            
            this.stop()
          }       
    }

    music(){
        if (typeof song1.loop == 'boolean')
        {    
          song1.loop = true;
        }
        else
        {
        song1.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
        }
        song1.play();
      }
       
}