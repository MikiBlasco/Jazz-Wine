class Score {
    constructor(ctx){
        this.ctx = ctx;
        this.score = this.frames;
        this.x = 600;
        this.y = 30;
        this.width = 100;
        this.height = 50;
        //this.container = ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#6e2329"
        this.ctx.font = " 18px sans-serif"
        this.text = ctx.fillText(`Score: ${this.score} pts`, this.x, this.y)
        this.ctx.font = "30px Verdana"
    }

    draw(){
      ctx.fillStyle = "#6e2329"

    }
}
