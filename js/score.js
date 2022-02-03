class Score {
    constructor(ctx){
        this.ctx = ctx;
    }


    draw(){
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
                if (this.score >=80) this.ctx.fillStyle ="green"
                this.ctx.font = " bold 100px sans-serif"
                this.text = ctx.fillText(`${this.score}`, this.x, this.y)
            }

    }


}
