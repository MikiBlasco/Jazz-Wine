const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//variables-------------------------------------------------------------------------------------------
//create new main character from the Player class
const player = new Player(ctx)


//create new first secondary from the Bottle class
const bottle = new Bottle(ctx)

//create new first secondary from the Bottle class
const bottleBig = new BottleBig(ctx)


//create new second secondary from the Cat class
const cat = new Cat(ctx)

//create new second secondary from the CatNinja class
const catNinja = new CatNinja(ctx)


//create new Background from the Background class
const background = new Background(ctx)

//create new Score from the Score class
const score = new Score(ctx)


//create new Game from the Game class
const game = new Game(ctx, player, bottle, bottleBig, cat, catNinja, background, score)

//Button-----------------------------------------------------------------------------------------------
const startButton = document.getElementById("startButton")

//link start the game with the button.
startButton.onclick = ()=> {
    startButton.textContent = "!Speed Up!"
    //startButton.blur();
    game.play();
    
};

//Events------------------------------------------------------------------------------

//link movement to the keyboard.
document.addEventListener('keydown', (event)=>{
    switch (event.code) {
        case "ArrowLeft":
            player.vx -= 3
            break;
        case "ArrowRight":
            player.vx += 3
    }
});

document.addEventListener("keyup", (event)=>{
    player.vx = 0;
    player.vy = 0;
})

this.ctx.drawImage(
    img = "/images/jazz original.png",
    this.x,
    this.y,
    this.width,
    this.height,    
);