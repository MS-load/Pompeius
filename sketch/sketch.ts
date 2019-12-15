let topOffset: number
let leftOffset: number

let pieceHeight: number
let img: p5.Image
let xPos: number


let selectedImage: number = -1

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {

}

class ImageProperties {
    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
    //private static img:string  = 'https://source.unsplash.com/350x350/?nature,water'
    private static urlRoot: string = 'https://source.unsplash.com/'
    private static imgTags: string = 'nature,water'
    private static dWidth: number = 350
    private static noOfSegments: number = 3
    public static segmentPosition: number[] = []

    public static getDestinationWidth(): number {
        return this.dWidth
    }

    public static getImgUrl(): string {
        let imgUrl = this.urlRoot + this.dWidth + "x" + this.dWidth + "/?" + this.imgTags
        return imgUrl
    }

    public static getNoOfSegments(): number {
        return this.noOfSegments
    }
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
    topOffset = windowHeight / 4
    leftOffset = (windowWidth / 2) - (ImageProperties.getDestinationWidth() / 2)
    pieceHeight = Math.floor(ImageProperties.getDestinationWidth() / ImageProperties.getNoOfSegments())
    xPos = 0
    img = loadImage(ImageProperties.getImgUrl())
    for (let i = 0; i < ImageProperties.getNoOfSegments(); i++) {
        ImageProperties.segmentPosition.push(0)
    }
    //console.log(segmentPosition)
}

/**
 * Built in draw function in P5
 * This is a good place to call public functions of the object
 * you created in the setup function above
 */
function draw() {
    background('black')
    noFill()
    stroke('red')
    strokeWeight(4)
    rect(leftOffset, topOffset, ImageProperties.getDestinationWidth(), ImageProperties.getDestinationWidth())
    drawSplitImage()
}

function drawSplitImage() {

    xPos += ImageProperties.getNoOfSegments()
    //console.log(xPos)
    if (xPos >= width) {
        xPos = 0
    }

    for (let i = 0; i < ImageProperties.getNoOfSegments(); i++) {

        if (i > selectedImage) {
            ImageProperties.segmentPosition[i] = xPos
            if (i % 2 === 1) {
                ImageProperties.segmentPosition[i] = width - (xPos + ImageProperties.getDestinationWidth())
            }
        }

        if (i === (selectedImage + 1)) {
            stroke('hsla(160, 100%, 50%, 0.5)')
            strokeWeight(10)
            rect(ImageProperties.segmentPosition[i], topOffset + (pieceHeight * i),
                ImageProperties.getDestinationWidth(), pieceHeight)
        }

        image(img, ImageProperties.segmentPosition[i], topOffset + (pieceHeight * i),
            ImageProperties.getDestinationWidth(), pieceHeight, 0,
            pieceHeight * i, ImageProperties.getDestinationWidth(), pieceHeight)
    }
}


function keyPressed(): void {
    selectedImage++
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    topOffset = windowHeight / 4
    leftOffset = (windowWidth / 2) - (ImageProperties.getDestinationWidth() / 2)
}