const canvas = document.getElementById("canvas")
console.log(canvas)
const ctx = canvas.getContext("2d")
console.log(ctx)

//create new main character from the Player class
const player = new Player(ctx)
console.log(player)

//create new first secondary from the Bottle class
const bottle = new Bottle(ctx)
console.log(bottle)

//create new second secondary from the Cat class
const cat = new Cat(ctx)
console.log(cat)

//create nre Background from the Background class
const background = new Background(ctx)
console.log(background)

const score = new Score(ctx)
console.log(score)