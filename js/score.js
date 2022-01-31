class Score {
    constructor(ctx){
        this.ctx = ctx;
        this.score = 0;
        this.x = 680;
        this.y = 40;
        this.width = 100;
        this.height = 50;
        //this.container = ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }

    checkReward(){
        if (this.bottles.some((object) => 
        this.player.collidesWith(object))) 
        this.score += 1
               
    }


    draw(){
        this.score = parseInt(game.frameNumber / 50)
        ctx.fillStyle = "#3b0105";
        this.ctx.font = " bold 25px sans-serif"
        this.text = ctx.fillText(`Score: ${this.score} points`, this.x, this.y)

    };


}
