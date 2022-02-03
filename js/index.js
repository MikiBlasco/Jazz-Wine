const outCanvas = document.getElementById("out-canvas")
const inCanvas = document.getElementById("in-canvas") 
console.log(outCanvas)
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//variables-------------------------------------------------------------------------------------------
//create new main character from the Player class
const player = new Player(ctx)

//create new first secondary from the Glass class
const glass = new Glass(ctx)

//create new first secondary from the Bottle class
const bottleBig = new BottleBig(ctx)

//create new second secondary from the Cat class
const cat = new Cat(ctx)

//create new second secondary from the CatNinja class
const catNinja = new CatNinja(ctx)

//create new Background from the Background class
const background = new Background(ctx)


//create new Game from the Game class
const game = new Game(ctx, player, glass, bottleBig, cat, catNinja, background)

//Button-----------------------------------------------------------------------------------------------
const startButton = document.getElementById("startButton")

//link start the game with the button.
startButton.onclick = ()=> {
    inCanvas.classList.toggle("hidden")
    outCanvas.classList.toggle("hidden")
    startButton.textContent = "!Speed Up!"
    startButton.blur();
    game.start();
    
};

//Events------------------------------------------------------------------------------

//link movement to the keyboard.
document.addEventListener('keydown', (event)=>{
    switch (event.code) {
        case "ArrowLeft":
            player.vx = -8
            break;
        case "ArrowRight":
            player.vx = 8
    }
});

document.addEventListener("keyup", (event)=>{
    player.vx = 0;
    player.vy = 0;
})


//Music & Sounds------------------------------------------------------------------------------

const main1 = new Audio("audio/song-flauta.mp3")
const main2 = new Audio("audio/intro.mp3")
const main3 = new Audio("audio/a-mysterious-town-9689.mp3")
const final = new Audio("audio/epic.mp3")
const win = new Audio("audio/win.wav")
const glass1 = new Audio("audio/glass.wav")
const glass2 = new Audio("audio/glass2.wav")
const glass3 =new Audio("audio/glass3.wav")
const ninjaCat1 = new Audio("audio/ninjacat.wav")
const ninjaCat2 = new Audio("audio/ninjaCat2.wav")
const bigBottle1 = new Audio("audio/bigbottle.wav")
const bigBottle2 = new Audio("audio/bigbottle2.wav")
const bigBottle4 = new Audio("audio/bigBottle4.wav")
const bigBottle5 = new Audio ("audio/uou.wav")
const bigBottle6 = new Audio("audio/levelup.wav")
const cat1 = new Audio ("audio/cat2.wav")
const cat2 = new Audio ("audio/cat3.wav")



