/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */


let topOffset: number
let bottomOffset: number
let leftOffset: number

//let level: number = 3
let pieceHeight: number
let img: p5.Image
let xPos: number

// class GameFrame {
//     private imageWidth: number
//     private imageHeight: number

//     constructor(imageWidth: number, imageHeight: number) {
//         this.imageWidth = imageWidth
//         this.imageHeight = imageHeight
//     }
// }

function preload() {

}

class ImageProperties {
    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
    //private static img:string  = 'https://source.unsplash.com/350x350/?nature,water'
    private static urlRoot: string = 'https://source.unsplash.com/'
    private static imgTags: string = 'nature,water'
    private static dWidth: number = 350
    private static noOfSegments: number = 3


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
    bottomOffset = windowHeight / 4
    leftOffset = (windowWidth / 2) - (ImageProperties.getDestinationWidth() / 2)
    pieceHeight = Math.floor(ImageProperties.getDestinationWidth() / ImageProperties.getNoOfSegments())
    xPos = 0
    img = loadImage(ImageProperties.getImgUrl())
}



// function keyPressed(): void {
//     if (keyCode === 32) {
//         level++
//         console.log("Mamta")
//     }
// }


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

    for (let i = 0; i < ImageProperties.getNoOfSegments(); i++) {
        let newXPos: number = xPos
        if (i % 2 === 1) {
            newXPos = width - (xPos + ImageProperties.getDestinationWidth())
        }

        image(img, newXPos, topOffset + (pieceHeight * i),
            ImageProperties.getDestinationWidth(), pieceHeight, 0,
            pieceHeight * i, ImageProperties.getDestinationWidth(), pieceHeight)
    }

    xPos += ImageProperties.getNoOfSegments()
    //console.log(xPos)
    if (xPos >= width) {
        xPos = 0
    }

}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}