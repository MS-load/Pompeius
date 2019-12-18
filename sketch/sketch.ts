let topOffset: number
let leftOffset: number

let pieceHeight: number
let img: p5.Image
let xPos: number


let selectedImage: number = -1

let gameFrame: GameFrame
let imageProperties: ImageProperties
let gameSettings: GameSettings
let inputSettings: InputSettings

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
<<<<<<< HEAD
    songBlues = (window as any).loadSound("./assets/music/blues.mp3")
    songPunk = (window as any).loadSound("./assets/music/jonny 2.1.mp3")
    songPop = (window as any).loadSound("./assets/music/poppen.mp3")
    songMetal = (window as any).loadSound("./assets/music/ELFVES AND DWARFES solo.mp3");
=======

>>>>>>> baa4b023dc8ffd29cf0c4411bc71fcfe1d852b83
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
    //noCursor()
    fullscreen()
<<<<<<< HEAD
    soundFormats('mp3')
    musicChoice = new MusicChoice()
    musicChoice.createButtons()
    musicChoice.mousePresser()
    musicChoice.togglePunkPlaying()
    musicChoice.toggleMetalPlaying()
    musicChoice.togglePopPlaying()
    musicChoice.toggleBluesPlaying()
    
=======
    setParameters()

    //console.log(segmentPosition)
    imageProperties = new ImageProperties()
   
    gameFrame = new GameFrame()
    gameSettings = new GameSettings()
    inputSettings = new InputSettings()
    inputSettings.getUserName()
>>>>>>> baa4b023dc8ffd29cf0c4411bc71fcfe1d852b83
}

function setParameters() {
    topOffset = windowHeight / 4
    leftOffset = (windowWidth / 2) - (ImageProperties.getDestinationWidth() / 2)
    pieceHeight = Math.floor(ImageProperties.getDestinationWidth() / ImageProperties.getNoOfSegments())
    xPos = 0
    img = loadImage(ImageProperties.getImgUrl())
    for (let i = 0; i < ImageProperties.getNoOfSegments(); i++) {
        ImageProperties.segmentPosition.push(0)
    }
}
/**
 * Built in draw function in P5
 * This is a good place to call public functions of the object
 * you created in the setup function above
 */
function draw() {

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

}

function keyPressed(): void {
    if (keyCode === 32) {
        selectedImage++
        if (selectedImage >= ImageProperties.getNoOfSegments()) {
            console.log("exceeded")
            ImageProperties.noOfSegments++
            selectedImage = -1
            setParameters()
        }
        console.log(selectedImage)
    }
}

function changeLevel(): void {
    if (selectedImage >= ImageProperties.getNoOfSegments()) {
        console.log("exceeded")
        ImageProperties.noOfSegments++
    }
}



/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
<<<<<<< HEAD
    resizeCanvas(windowWidth, windowHeight);
}
=======
    resizeCanvas(windowWidth, windowHeight)
    topOffset = windowHeight / 4
    leftOffset = (windowWidth / 2) - (ImageProperties.getDestinationWidth() / 2)
}
>>>>>>> baa4b023dc8ffd29cf0c4411bc71fcfe1d852b83
