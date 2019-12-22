class ImageFrame {
    //private img:string  = 'https://source.unsplash.com/350x350/?nature,water'

    private urlRoot: string
    private imgTags: string
    private dWidth: number

    private pieceHeight: number = 0
    private xPos: number = 0
    private img: p5.Image

    private noOfSegments: number
    private segmentPosition: number[]

    private selectedImage: number

    private segmentScore: number

    constructor() {
        this.urlRoot = 'https://source.unsplash.com/'
        this.imgTags = 'cartoon'
        this.dWidth = 350
        this.noOfSegments = 3
        this.segmentPosition = []
        this.img = loadImage(this.getImg())
        this.selectedImage = -1
        this.segmentScore = 0
    }

    public getDestinationWidth(): number {
        return this.dWidth
    }

    public getImg(): string {
        let imgUrl = this.urlRoot + this.dWidth + "x" + this.dWidth + "/?" + this.imgTags + "/sig=" + round(random(150))
        console.log(imgUrl)
        return imgUrl
    }

    public getNoOfSegments(): number {
        return this.noOfSegments
    }

    public increaseNoOfSegments(): number {
        return this.noOfSegments++
    }

    public getSelectedImage(): number {
        return this.selectedImage
    }

    public increaseSelectedImage(): number {
        return this.selectedImage++
    }

    public resetSelectedImage() {
        this.selectedImage = -1
    }

    /**
     * Draws the image based on the number of segments and the xPosition
     */
    public imageDraw(offsets: number[]) {

        /**
         * updates the xPosition
         */
        this.pieceHeight = (this.getDestinationWidth() / this.getNoOfSegments())


        this.xPos += this.getNoOfSegments()
        //console.log(xPos,this.myXPos)


        if (this.xPos >= width) {
            this.xPos = 0
        }

        for (let i = 0; i < this.getNoOfSegments(); i++) {

            //Updates array with the new position
            if (i > this.selectedImage) {
                this.segmentPosition[i] = this.xPos

                //reverse direction for alternate images
                if (i % 2 === 1) {
                    this.segmentPosition[i] = width - (this.xPos + this.getDestinationWidth())
                }
            }

            //Draws a rectangle around the selected Image
            if (i === (this.selectedImage + 1)) {
                stroke('hsla(160, 100%, 50%, 0.5)')
                strokeWeight(10)
                rect(this.segmentPosition[i], offsets[0] + (this.pieceHeight * i),
                    this.getDestinationWidth(), this.pieceHeight)
            }

            //Renders the image 
            image(this.img, this.segmentPosition[i], offsets[0] + (this.pieceHeight * i),
                this.getDestinationWidth(), this.pieceHeight, 0,
                this.pieceHeight * i, this.getDestinationWidth(), this.pieceHeight)
        }
    }

    public setParameters() {
        this.img = loadImage(this.getImg())
        this.xPos = 0
        for (let i = 0; i < this.getNoOfSegments(); i++) {
            this.segmentPosition.push(0)
        }
    }



    public gameScore(offsets: number[]) {
        let score = this.segmentPosition[this.selectedImage + 1]
       
        console.log("left:", offsets[1])
        if (score > offsets[1] - 20 && score < offsets[1] + 20) {
             this.segmentScore += 1000
            console.log("score", (this.selectedImage + 1), this.segmentScore)
        }
        else if ((score > offsets[1] + 20 && score < offsets[1] + 50) || (score > offsets[1] - 50 && score < offsets[1] - 20)) {
            this.segmentScore += 500
            console.log("score", (this.selectedImage + 1), this.segmentScore)
        }
        else {
            this.segmentScore += 0
           console.log("score", (this.selectedImage + 1), this.segmentScore)
        }
    }

    public displayScore() {
        textSize(32)
        text((this.segmentScore).toString(), 100, 100)
        fill(0, 102, 153)
    }
}

