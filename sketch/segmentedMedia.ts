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
        this.imgTags = 'cartoon'
        this.img = loadImage(this.getImg())

        this.pieceHeight = 0
        this.xPos = 0

        this.noOfSegments = 3
        this.segmentPosition = []

        this.selectedSegment = -1
    }

    /**
     * Sets the basic offsets used for the game
     */
    public getOffset() {
        let topOffset = windowHeight / 4
        let leftOffset = (windowWidth / 2) - (this.frameWidth / 2)
        return [topOffset, leftOffset]
    }

    /**
     * Gets the image url
     */
    private getImg(): string {
        let imgUrl = this.urlRoot + this.frameWidth + "x" + this.frameWidth + "/?" + this.imgTags + "/sig=" + round(random(150))
        console.log(imgUrl)
        return imgUrl
    }

    /**
     * The referenceFrame for the image
     */
    private referenceFrame() {
        noFill()
        stroke('red')
        strokeWeight(4)
        let offsets = this.getOffset()
        rect(offsets[1], offsets[0], this.frameWidth, this.frameWidth)
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

            //Draws a rectangle around the selected Image
            if (i === (this.selectedSegment + 1)) {
                stroke('hsla(160, 100%, 50%, 0.5)')
                strokeWeight(10)
                rect(this.segmentPosition[i], offsets[0] + (this.pieceHeight * i),
                    this.frameWidth, this.pieceHeight)
            }

            //Renders the image 
            image(this.img, this.segmentPosition[i], offsets[0] + (this.pieceHeight * i),
                this.frameWidth, this.pieceHeight, 0,
                this.pieceHeight * i, this.frameWidth, this.pieceHeight)
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
            this.noOfSegments++
            this.img = loadImage(this.getImg())
        }
    }

    /**
     * Updates the segment
     * @param timeOut checks timer
     * @returns if level completed is true / false
     */
    public updateSegment(timeOut:boolean):Boolean {
        let levelComplete = false
        this.selectedSegment++
        if (this.selectedSegment >= this.noOfSegments) {
            //console.log("exceeded")
            this.updateParameters(timeOut)
            levelComplete = true
        }
        return levelComplete
    }

    /**
     * gets position of the selected segment
     */
    public getSelectedSegmentPosition() {
        return this.segmentPosition[this.selectedSegment + 1]
    }

    /**
     * Draws the reference frame and the moving image
     */
    public draw() {
        let offsets = this.getOffset()
        this.referenceFrame()
        this.drawMovingImage(offsets)
    }
}