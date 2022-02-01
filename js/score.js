class Score {
    constructor(ctx){
        this.ctx = ctx;
        //this.score = 0;
        this.x = 680;
        this.y = 40;
        this.width = 100;
        this.height = 50;
        //this.container = ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }

      
    draw(){
        this.score = 1
        ctx.fillStyle = "#3b0105";
        this.ctx.font = " bold 25px sans-serif"
        this.text = ctx.fillText(`Score: ${this.score} points`, this.x, this.y)

    };

    changeColor(){
        
    }


}
