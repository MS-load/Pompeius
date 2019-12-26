

let gameFrame: GameFrame
let imageFrame: ImageFrame

let inputSettings: InputSettings
let gameStats: GameStats

let popp: p5.SoundFile;
let punk: p5.SoundFile;
let metal: p5.SoundFile
let blues: p5.SoundFile
let swoosh: p5.SoundFile
let spaceClick: p5.SoundFile
let musicChoice: MusicChoice
// let soundEffects: SoundEffects


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    imageProperties = new ImageProperties()
    setParameters()
   popp = (window as any).loadSound('./assets/music/poppen.mp3')
   punk = (window as any).loadSound('./assets/music/jonny 2.1.mp3')
   metal = (window as any).loadSound('./assets/music/ELFVES AND DWARFES solo.mp3')
   blues = (window as any).loadSound('./assets/music/blues.mp3')
   swoosh = (window as any).loadSound('./assets/sounds/Swoosh 3-SoundBible.com-1573211927.mp3')
   spaceClick = (window as any).loadSound('./assets/sounds/Stapler-SoundBible.com-374581609.mp3')
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


    gameFrame = new GameFrame()

    inputSettings = new InputSettings()
    inputSettings.getUserName()
    soundFormats('mp3')
    musicChoice = new MusicChoice()
    musicChoice.createSelector()
    musicChoice.selectMusic()
    // soundEffects = new SoundEffects()
    // soundEffects.spaceBarSound()
    // soundEffects.swooshSound()
    
}

}

/**
 * Built in draw function in P5
 * This is a good place to call public functions of the object
 * you created in the setup function above
 */
function draw() {

<<<<<<< HEAD
    background(0)
    noFill()
    stroke('red')
    strokeWeight(4)
    rect(leftOffset, topOffset, ImageProperties.getDestinationWidth(), ImageProperties.getDestinationWidth())
    
    //gameFrame.draw()
    imageProperties.imageDraw()
    //changeLevel()
    
    gameFrame.draw()
    inputSettings.update()
    inputSettings.draw()
    gameStats.draw()
=======
    gameFrame.draw()
    //inputSettings.update()
    //inputSettings.draw()
>>>>>>> 0fc7bb319dab4c05c75a9c5f0eabdee31d56901f
}

function keyPressed(): void {
    if (keyCode === 32) {
        gameScore()
        spaceClick.play()
        selectedImage++
        if (selectedImage >= imageProperties.getNoOfSegments()) {
            console.log("exceeded")
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


}
    leftOffset = (windowWidth / 2) - (ImageProperties.getDestinationWidth() / 2)

