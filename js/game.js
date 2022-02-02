class Game {
    constructor(ctx, player, bottle, bottleBig, cat, catNinja, background) {
        this.ctx = ctx;
        this.player = player;
        this.bottle = bottle;
        this.bottleBig = bottleBig;
        this.cat = cat;
        this.catNinja = catNinja;
        this.background = background;
        this.frameNumber = 0;
        this.x;
        this.y;
        this.score = 10
    }

    start(){
        this.play()
    }

    play(){

        if(this.frameNumber !== null) {
            this.frameNumber = requestAnimationFrame(this.play.bind(this));
        }

        this.draw();
        this.move();
        this.updateScore();
        this.generateSecondarys();
        this.checkCollisions();
        this.destroySecondarys();               
        this.drawScore(); 
        this.background.backgroundChange(this.score);
        this.GameOver();       
    }

    stop(){
        cancelAnimationFrame(this.frameNumber);
        this.frameNumber = null; 
        
    
    }

    generateSecondarys(){
        this.cat.generate(this.score, this.frameNumber)
        this.catNinja.generate(this.score, this.frameNumber)
        this.bottle.generate(this.score, this.frameNumber)
        this.bottleBig.generate(this.score, this.frameNumber)
    }
 
    destroySecondarys(){
        this.cat.destroy();
        this.catNinja.destroy();
        this.bottle.destroy();
        this.bottleBig.destroy()
    }

    move(){
        this.player.move(),
        this.player.exitsCanvas(),
        this.bottle.move(),
        this.bottleBig.move()
        this.catNinja.move(this.catsN),
        this.cat.move()        
    }

    draw(){
        this.background.draw(),
        this.bottle.draw(),        
        this.cat.draw(),
        this.catNinja.draw(this.catsN),
        this.bottleBig.draw(),
        this.player.draw()         
        //this.score.draw()  
    }

    checkCollisions(){
        this.cat.checkCollision(this.collision);
        this.catNinja.checkCollision(this.pain);
        this.bottle.checkCollision(this.reward);
        this.bottleBig.checkCollision(this.rewardBig)
    }
    
    updateScore(){
        
        if (this.bottle.checkCollision() === true){ 
            this.score += 2
            glass1.play()        
        }

        if (this.cat.checkCollision() === true){ 
            this.score -= 1
            cat3.play()
        }
        if (this.bottleBig.checkCollision()=== true) { 
            this.score += 5
            levelUp.play()
            uou.play()
            bigBottle.play()
            bigBottle2.play()
        }
        if (this.catNinja.checkCollision()=== true) { 
            this.score -= 10
            ninjaCat2.play()
            ninjaCat.play()
            cat3.play()
        }
    }


    drawScore(){
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
            epic.pause()
            win.play()
          }       
    }

    }

           