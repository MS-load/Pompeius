let inputSettings: InputSettings

let popp: p5.SoundFile
let punk: p5.SoundFile
let metal: p5.SoundFile
let blues: p5.SoundFile

let musicChoice: MusicChoice
let soundEffects: SoundEffects

let gameSettings: GameSettings

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    popp = (window as any).loadSound('./assets/music/poppen.mp3')
    punk = (window as any).loadSound('./assets/music/jonny 2.1.mp3')
    metal = (window as any).loadSound('./assets/music/ELFVES AND DWARFES solo.mp3')
    blues = (window as any).loadSound('./assets/music/blues.mp3')
    soundEffects = new SoundEffects
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    //noCursor()
    fullscreen()

    gameSettings = new GameSettings()
    inputSettings = new InputSettings()
    musicChoice = new MusicChoice()

    inputSettings.getUserName()

    soundFormats('mp3')
    musicChoice.createSelector()
}

/**
 * Built in draw function in P5
 * This is a good place to call public functions of the object
 * you created in the setup function above
 */
function draw() {
    gameSettings.draw()
}

function keyPressed(): void {
    gameSettings.eventHandler()
    
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function mousePressed() {
    gameSettings.pressironie()
}



