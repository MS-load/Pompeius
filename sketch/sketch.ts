/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */


function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
let topOffset: number
let bottomOffset: number
const level: number = 3
let pieceHeight: number
let img: p5.Image
let speed: number
function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    //noCursor()
    fullscreen()
    img = loadImage('https://source.unsplash.com/350x350/?nature,water')
    topOffset = windowHeight / 4
    bottomOffset = windowHeight / 4
    pieceHeight = Math.floor(350 / level)
    speed = width
}



/**
 * Built in draw function in P5
 * This is a good place to call public functions of the object
 * you created in the setup function above
 */
function draw() {
    background('black')
    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
    image(img, speed, topOffset, 350, pieceHeight, 0, 0, 350, pieceHeight)
    image(img, -speed, (topOffset + pieceHeight), 350, pieceHeight, 0, pieceHeight, 350, pieceHeight)
    image(img, speed, (topOffset + pieceHeight * 2), 350, pieceHeight, 0, pieceHeight * 2, 350, pieceHeight)
    speed = speed + level
    //console.log(speed)
    if (speed >= width) {
        speed = 0
    }
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}