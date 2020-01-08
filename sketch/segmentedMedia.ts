class SegmentedMedia {

    private frameWidth: number

    private img: p5.Image
    private urlRoot: string
    private imgTags: string

    private pieceHeight: number
    private xPos: number
    private noOfSegments: number
    private segmentPosition: number[]
    private selectedSegment: number

    constructor() {
        this.frameWidth = 350
        this.urlRoot = 'https://source.unsplash.com/'
        this.imgTags = 'cartoons'
        this.img = loadImage(this.getImgUrl(), this.imageLoaded)
        this.pieceHeight = 0
        this.xPos = 0
        this.noOfSegments = 3
        this.segmentPosition = []
        this.selectedSegment = -1
    }

    /**Gets the basic offset for the media*/
    public getOffset() {
        let topOffset = height / 4
        let leftOffset = (width / 2) - (this.frameWidth / 2)
        return [topOffset, leftOffset]
    }

    /**Gets the theme*/
    public setTag(theme:string){
        this.imgTags = theme
    }

    /**Gets the imgUrl*/
    private getImgUrl(): string {
        let imgUrl = this.urlRoot + this.frameWidth + "x" + this.frameWidth + "/?" + this.imgTags + "/sig=" + round(random(100))
        return imgUrl
    }

    /**Gets the reference frame*/
    private referenceFrame() {
        noFill()
        stroke('red')
        strokeWeight(4)
        let offsets = this.getOffset()
        rect(offsets[1], offsets[0], this.frameWidth, this.frameWidth)
    }

    /**
     * A callback function used to check if the image is loaded
     * @param _img teh image to be checked
     */
    private imageLoaded(_img: p5.Image) {
        isImageLoaded = true
    }

    /**
     * Draws the moving image
     * @param offsets the offsets set for the game
     */
    private drawMovingImage(offsets: number[]) {
        this.pieceHeight = (this.frameWidth / this.noOfSegments)

        //updates the x-position
        this.xPos += this.noOfSegments * 1.5
        if (this.xPos >= width) {
            this.xPos = 0
        }

        for (let i = 0; i < this.noOfSegments; i++) {
            //Updates array with the new position
            if (i > this.selectedSegment) {
                this.segmentPosition[i] = this.xPos
                //reverse direction for alternate images
                if (i % 2 === 1) {
                    this.segmentPosition[i] = width - (this.xPos + this.frameWidth)
                }
            }
            //Renders the image 
            image(this.img, this.segmentPosition[i], offsets[0] + (this.pieceHeight * i),
                this.frameWidth, this.pieceHeight, 0, this.pieceHeight * i, this.frameWidth, this.pieceHeight)

            if (isImageLoaded === true) {
                //Draws a rectangle around the selected Image
                if (i === (this.selectedSegment + 1)) {
                    stroke('hsla(160, 100%, 50%, 0.5)')
                    strokeWeight(10)
                    rect(this.segmentPosition[i], offsets[0] + (this.pieceHeight * i),
                        this.frameWidth, this.pieceHeight)
                }
            }
            else {//Prints loading text
                textSize(20)
                fill('white')
                stroke(1)
                text(("Loading level please wait.. "), width * 0.5, height * 0.5)
            }
        }
    }

    /**
     * Updates the gameParameters 
     * @param timeOut checks timer
     */
    public updateParameters(timeOut: Boolean) {
        this.selectedSegment = -1
        this.xPos = 0
        if (timeOut === false) {
            isImageLoaded = false
            this.img = loadImage(this.getImgUrl(), this.imageLoaded)
            this.noOfSegments++
        }
    }

    /**
     * Updates the segment
     * @param timeOut checks timer
     * @returns if level completed is true / false
     */
    public updateSegment(): Boolean {
        let levelComplete = false
        this.selectedSegment++
        if (this.selectedSegment + 1 >= this.noOfSegments) {
            levelComplete = true
        }
        return levelComplete
    }

    /**Resets the Parameters*/
    public resetParameters() {
        this.pieceHeight = 0
        this.xPos = 0
        this.noOfSegments = 3
        this.segmentPosition = []
        this.selectedSegment = -1
    }
    
    /**gets position of the selected segment*/
    public getSelectedSegmentPosition() {
        return this.segmentPosition[this.selectedSegment + 1]
    }

    /**Draws the reference frame and the moving image*/
    public draw() {
        let offsets = this.getOffset()
        this.referenceFrame()
        this.drawMovingImage(offsets)
    }
}