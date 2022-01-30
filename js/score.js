class Score {
    constructor(ctx){
        this.ctx = ctx;
        this.score = 0
    }

    updateScore(frames){
        this.score = this.frames;
    }

    draw(){
        //rectangle:
        this.save()
        this.fillStyle = "black";
        this.font= " bold 24px sans-serif";
        this.fillText(`score: ${this.score} points`, 20, 40)
        this.restore()
    }
}
