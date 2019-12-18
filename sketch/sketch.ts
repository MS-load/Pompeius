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
function preload() {

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
    imageProperties = new ImageProperties()
    setParameters()
   
    gameFrame = new GameFrame()
    gameSettings = new GameSettings()
    inputSettings = new InputSettings()
    inputSettings.getUserName()
}

function setParameters() {
    
    topOffset = windowHeight / 4
    leftOffset = (windowWidth / 2) - (imageProperties.getDestinationWidth() / 2)
    pieceHeight = Math.floor(imageProperties.getDestinationWidth() / imageProperties.getNoOfSegments())
    xPos = 0
    img = loadImage(imageProperties.getImgUrl())
    for (let i = 0; i < imageProperties.getNoOfSegments(); i++) {
        imageProperties.segmentPosition.push(0)
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
    rect(leftOffset, topOffset, imageProperties.getDestinationWidth(), imageProperties.getDestinationWidth())
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
        if (selectedImage >= imageProperties.getNoOfSegments()) {
            console.log("exceeded")
            imageProperties.noOfSegments++
            selectedImage = -1
            setParameters()
        }
        console.log(selectedImage)
    }
}

function changeLevel(): void {
    
    if (selectedImage >= imageProperties.getNoOfSegments()) {
        console.log("exceeded")
        imageProperties.noOfSegments++
    }
}



/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    topOffset = windowHeight / 4
    leftOffset = (windowWidth / 2) - (imageProperties.getDestinationWidth() / 2)
}