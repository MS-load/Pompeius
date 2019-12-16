/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
let songBlues: p5.SoundFile;
let songPunk: p5.SoundFile;
let songPop: p5.SoundFile
let songMetal: p5.SoundFile
let musicChoice: MusicChoice

function preload() {
    songBlues = (window as any).loadSound("./blues.mp3")
    songPunk = (window as any).loadSound("./jonny 2.1.mp3")
    songPop = (window as any).loadSound("./poppen.mp3")
    songMetal = (window as any).loadSound("./ELFVES AND DWARFES solo.mp3");
}
/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(200, 200)
    frameRate(60)
    noCursor()
    fullscreen()
    soundFormats('mp3')
    musicChoice = new MusicChoice()
    musicChoice.createButtons()
    musicChoice.mousePresser()
    musicChoice.togglePunkPlaying()
    musicChoice.toggleMetalPlaying()
    musicChoice.togglePopPlaying()
    musicChoice.toggleBluesPlaying()
    
}

/**
 * Built in draw function in P5
 * This is a good place to call public funcions of the object
 * you created in the setup function above
 */
function draw() {
    background('black')
    fill('red')
    stroke('white')
    circle(width * .5, height * .5, width * 0.2)
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
