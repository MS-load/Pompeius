

let gameFrame: GameFrame
let imageFrame: ImageFrame

let inputSettings: InputSettings

let popp: p5.SoundFile;
let punk: p5.SoundFile;
let metal: p5.SoundFile
let blues: p5.SoundFile
let musicChoice: MusicChoice


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

    imageFrame = new ImageFrame()
    imageFrame.setParameters()
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

    //console.log(segmentPosition)


    gameFrame = new GameFrame()

    inputSettings = new InputSettings()
    inputSettings.getUserName()
    soundFormats('mp3')
    musicChoice = new MusicChoice()
    musicChoice.createSelector()
    musicChoice.selectMusic()
    // musicChoice.togglePunkPlaying()
    // musicChoice.toggleMetalPlaying()
    // musicChoice.togglePopPlaying()
    // musicChoice.toggleBluesPlaying()

}

/**
 * Built in draw function in P5
 * This is a good place to call public functions of the object
 * you created in the setup function above
 */
function draw() {

    gameFrame.draw()
    //inputSettings.update()
    //inputSettings.draw()
}

function keyPressed(): void {
    if (keyCode === 32) {
        imageFrame.gameScore(gameFrame.getOffset())
        imageFrame.increaseSelectedImage()
        
        if (imageFrame.getSelectedImage() >= imageFrame.getNoOfSegments()) {
            console.log("exceeded")
            imageFrame.increaseNoOfSegments()
            imageFrame.resetSelectedImage()
            imageFrame.setParameters()
        }
    }
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}


