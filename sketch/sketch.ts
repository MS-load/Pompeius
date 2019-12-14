/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */


let topOffset: number
let bottomOffset: number

let level: number = 3
let pieceHeight: number
let img: p5.Image
let speed: number

let noOfSegments: number

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
    pieceHeight = Math.floor(350 / level)
    speed = width
    img = loadImage(ImageProperties.getImgUrl())
}



class ImageProperties {
    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
    //private static img:string  = 'https://source.unsplash.com/350x350/?nature,water'
    private static dWidth: number  = 350
    private static urlRoot: string = 'https://source.unsplash.com/'
    private static imgTags: string = 'nature,water'


    public static getDestinationWidth(): number {
        return this.dWidth
    }

    public static getImgUrl(): string {
        let imgUrl = this.urlRoot + this.dWidth + "x" + this.dWidth + "/?" + this.imgTags
        return imgUrl
    }

}

function keyPressed(): void {
    if (keyCode === 32) {
        level++
        console.log("Mamta")
    }
}


/**
 * Built in draw function in P5
 * This is a good place to call public functions of the object
 * you created in the setup function above
 */
function draw() {
    background('black')
    // let dx: number
    // let dy: number
    // let dWidth: number
    // let dHeight: number
    // let sx: number
    // let sy: number
    // let sWidth: number
    // let sHeight: number

    image(img, speed, topOffset, ImageProperties.getDestinationWidth(), pieceHeight, 0, 0, ImageProperties.getDestinationWidth(), pieceHeight)
    image(img, (-speed + (width - ImageProperties.getDestinationWidth())), (topOffset + pieceHeight), ImageProperties.getDestinationWidth(), pieceHeight, 0, pieceHeight, ImageProperties.getDestinationWidth(), pieceHeight)
    image(img, speed, (topOffset + pieceHeight * 2), ImageProperties.getDestinationWidth(), pieceHeight, 0, pieceHeight * 2, ImageProperties.getDestinationWidth(), pieceHeight)
    speed = speed + level
    //console.log(speed)
    if (speed >= width) {
        speed = 0
    }

    // if (dx[i] %2 == 0)
    //         return true;
    //     else
    //         return false;
    
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}