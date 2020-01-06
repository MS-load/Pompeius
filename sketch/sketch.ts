let playerSettings: PlayerSettings

let popp: p5.SoundFile
let punk: p5.SoundFile
let metal: p5.SoundFile
let blues: p5.SoundFile

let musicChoice: MusicChoice
let soundEffects: SoundEffects
let isGameRunning: boolean
let gameSettings: GameSettings
let redAvatar: p5.Image
let greenAvatar: p5.Image
let blueAvatar: p5.Image

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
    spaceClick = (window as any).loadSound('./assets/sounds/Stapler-SoundBible.com-374581609.mp3')
    swoosh = (window as any).loadSound('./assets/sounds/Swoosh 3-SoundBible.com-1573211927.mp3')
    boooo = (window as any).loadSound('./assets/sounds/boooo.mp3')
    tadaa = (window as any).loadSound('./assets/sounds/tadaa.mp3')
    yaaayy = (window as any).loadSound('./assets/sounds/yaaayy.mp3')

    redAvatar = loadImage('./assets/images/redAvatar.png')
    greenAvatar = loadImage('./assets/images/greenAvatar.png')
    blueAvatar = loadImage('./assets/images/blueAvatar.png')

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
    fullscreen()

    gameSettings = new GameSettings()
    playerSettings = new PlayerSettings()
    musicChoice = new MusicChoice()
    inputSettings.getUserName()

    musicChoice = new MusicChoice()
    musicChoice.createSelector()
    soundEffects = new SoundEffects()

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



